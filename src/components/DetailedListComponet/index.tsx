import React, { useState } from "react";
import { TChildren } from "../../interfaces/children.type";
import DetailedListItemComponet from "../DetailedListItemComponet";
import PersonAvatarComponent from "../PersonAvatarComponent";
import styles from "./DetailedListComponet.module.scss";

export default function DetailedListComponet(person: any): JSX.Element {
  const [contacts, setContacts] = useState([
    {
      name: "Élisson Barbosa",
      phone: "47989001135",
      email: "elisson@duck.com",
    },
  ]);
  return (
    <div className={styles.container}>
      <PersonAvatarComponent {...person} />
      {contacts?.map?.((contact) => (
        <DetailedListItemComponet contact={contact} />
      ))}
    </div>
  );
}
