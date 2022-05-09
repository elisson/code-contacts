import { useNavigate } from "react-router-dom";
import { IPerson } from "../../interfaces/services/person.interface";
import ContactFormComponent from "../ContactFormComponent";
import PersonAvatarComponent from "../PersonAvatarComponent";
import styles from "./DetailedListItemComponet.module.scss";

type DetailedListItemComponentProp = {
  editMode?: boolean;
  person: IPerson;
};
export default function DetailedListItemComponet({
  editMode,
  person,
}: DetailedListItemComponentProp): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {editMode ? (
        <>
          <h4>Details</h4>
          <ContactFormComponent
            {...person}
            onSave={() => navigate("/", { replace: true })}
          />
        </>
      ) : (
        <PersonAvatarComponent
          {...person}
          onClick={() => navigate(`/contacts/${person.id}`, { replace: true })}
        />
      )}
    </div>
  );
}
