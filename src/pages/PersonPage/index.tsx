/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import _ from "underscore";
import DetailedListComponet from "../../components/DetailedListComponet";
import DetailedListItemComponet from "../../components/DetailedListItemComponet";
import EmptyResultComponent from "../../components/EmptyResultComponent";
import Loading from "../../components/LoadingComponent";
import { useQuery } from "../../hooks/useQuery";
import { TChildren } from "../../interfaces/children.type";
import { IPerson } from "../../interfaces/services/person.interface";
import { getAll as getAllPerson, getOne } from "../../services/personService";
import styles from "./PersonPage.module.scss";

export default function PersonPage(props: any): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [person, setPerson] = useState<IPerson>({} as IPerson);
  const location = useLocation();
  const query = useQuery();
  const { id } = useParams();
  const defaultUser = { phone: "", email: "", name: "",id:undefined } as IPerson;

  useEffect(
    function () {
      async function personAdd(name: string) {
        setIsLoading(true);
        setPerson({ ...defaultUser, name } as IPerson);
        setIsLoading(false);
      }
      async function findPerson(id: string) {
        setIsLoading(true);
        const _person = getOne(id) as IPerson;
        setPerson(_person);
        setIsLoading(false);
      }
      const name = query.get("name");
      if (id) {
        findPerson(id);
      } else {
        personAdd(name || "");
      }
    },
    [location.key]
  );

  if (isLoading || !person) return <Loading />;

  return (
    <>
      <DetailedListItemComponet person={person} editMode />
    </>
  );
}
