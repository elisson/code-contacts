import React from "react";
import { Outlet } from "react-router-dom";
import { TChildren } from "../../interfaces/children.type";
import styles from "./DefaultContainer.module.scss";

export default function DefaultContainer(props: any): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.control} />
      <h4 className={styles.title}>Contacts</h4>
      <div className={styles.nav}>
        <a href="/#/" className={styles.home}>
          <i />
          <span>Início</span>
        </a>
        <a href="/#/contacts" className={styles.new}>
          <i />
          <span>Adicionar novo contato</span>
        </a>
      </div>
      <Outlet />
    </div>
  );
}
