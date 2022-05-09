import { IPerson } from "../../interfaces/services/person.interface";
import DetailedListItemComponet from "../DetailedListItemComponet";
import styles from "./DetailedListComponet.module.scss";

interface IDetailedListComponetProp {
  AllPerson: IPerson[];
}
export default function DetailedListComponet({
  AllPerson,
}: IDetailedListComponetProp): JSX.Element {
  return (
    <div className={Object(AllPerson).length > 0 ? styles.container : undefined}>
      {AllPerson?.map?.((person) => (
        <DetailedListItemComponet person={person} />
      ))}
    </div>
  );
}
