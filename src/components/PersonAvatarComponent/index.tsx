/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./PersonAvatarComponent.module.scss";
import useAvatar from "../../hooks/useAvatar";

interface IPersonAvatarComponentProps {
  email: string;
  name: string;
  phone: string;
  onClick(): void;
}

export default function PersonAvatarComponent(
  person: IPersonAvatarComponentProps
) {
  const [avatar] = useAvatar(person.name);

  return avatar ? (
    <div className={styles.container} onClick={person.onClick}>
      <div className={styles.avatarContainer}>
        <img src={avatar} className={styles.avatar} alt="User avatar" />
      </div>
      <div className={styles.detail}>
        <h5>{person.name}</h5>
        <h6>{person.phone}</h6>
      </div>
    </div>
  ) : null;
}
