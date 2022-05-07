import React from "react";
import { Outlet } from "react-router-dom";
import { TChildren } from "../../interfaces/children.type";
import styles from "./DefaultContainer.module.scss";

export default function DefaultContainer(props: any): JSX.Element {
  // const [personAvatar,setPersonAvatar] = useAvatar('https://ui-avatars.com/api/?name=John+Doe');
  return (
    <div className={styles.container}>
      <div className={styles.control} />
      <h4 className={styles.title}>Contacts</h4>
      <input placeholder="Search" className={styles.input} />
      <Outlet />
    </div>
  );
}
