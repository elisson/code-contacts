import { Link, Outlet } from "react-router-dom";
import styles from "./DefaultContainer.module.scss";

export default function DefaultContainer(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.control} />
      <h4 className={styles.title}>Contacts</h4>
      <div className={styles.nav}>
        <Link to="/" className={styles.home}>
          <i />
          <span>Início</span>
        </Link>
        <Link to="/contacts" className={styles.new}>
          <i />
          <span>Adicionar novo contato</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
