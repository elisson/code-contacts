/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styles from "./PersonAvatarComponent.module.scss";
import useAvatar from "../../hooks/useAvatar";

interface IPersonAvatarComponentProps {
  email: string;
  name: string;
  phone: string;
}

export default function PersonAvatarComponent({
  ...person
}: IPersonAvatarComponentProps) {
  const [avatar] = useAvatar("person.name");

  return avatar ? (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        <img src={avatar} className={styles.avatar} alt="User avatar" />
      </div>
      <div>
        <h5>{person.name}</h5>
        <h6>{person.phone}</h6>
      </div>
    </div>
  ) : null;
}
