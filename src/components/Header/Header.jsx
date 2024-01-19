import styles from "./Header.module.scss";
import { formatDate } from "../../helpers/formatDate";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React News</h1>
      <h3 className={styles.date}>{formatDate(new Date())}</h3>
    </header>
  );
};

export default Header;
