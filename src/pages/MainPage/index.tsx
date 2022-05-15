import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import _ from "underscore";
import DetailedListComponet from "../../components/DetailedListComponet";
import EmptyResultComponent from "../../components/EmptyResultComponent";
import LoadingComponent from "../../components/LoadingComponent";
import { IPerson } from "../../interfaces/services/person.interface";
import { getAll as getAllPerson } from "../../services/personService";
import styles from "./MainPage.module.scss";

export default function MainPage(props: any): JSX.Element {
  const [AllPerson, setAllPerson] = useState<IPerson[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const [debouncedHandleInputChange] = useState(() =>
    _.debounce(handleInputChange, 800)
  );

  const [searchTerm, setSearchTerm] = useState(null);

  const emptyResult = !isLoading && Object(AllPerson).length === 0 && !isTyping;

  const showCreate = searchTerm && (!AllPerson || emptyResult) && !isTyping;

  async function handleInputChange(str: string) {
    setIsLoading(true);
    if ((str && str.length >= 2) || str.length === 0) {
      await loadData(str.length === 0 ? undefined : str);
      setTimeout(() => searchRef.current?.focus?.());
      setIsTyping(false);
    }
    setIsLoading(false);
    setIsTyping(false);
  }

  async function loadData(filter: string = "") {
    try {
      setIsLoading(true);
      const _allPerson = await getAllPerson(filter);
      if (_allPerson) setAllPerson(_allPerson);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  }

  useEffect(function () {
    loadData();
  }, []);

  return (
    <div>
      <div className={styles.inputContainer}>
        <i />
        <input
          className={styles.input}
          ref={searchRef}
          value={searchTerm || ""}
          disabled={isLoading}
          onInput={(e: any) => {
            setIsTyping(true);
            setSearchTerm(e.target.value);
            debouncedHandleInputChange(e.target.value);
          }}
          placeholder="Encontrar contato"
        />
      </div>
      {showCreate && (
        <Link to={`/contacts?name=${searchTerm}`} className={styles.new}>
          Adicionar <span>"{searchTerm}"</span> como contato
        </Link>
      )}
      {isLoading ? (
        <LoadingComponent />
      ) : emptyResult ? (
        <EmptyResultComponent />
      ) : (
        Array.isArray(AllPerson) && (
          <DetailedListComponet AllPerson={AllPerson} />
        )
      )}
    </div>
  );
}
