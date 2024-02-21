import styles from "./Header.module.scss";
import { formatDate } from "../../helpers/formatDate";
import { useTheme } from "../../helpers/hooks/useTheme";
import { themes } from "../../assets/icons";

const Header: React.FC = () => {
  const { isDark, handleTheme } = useTheme();
  
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>HandyF News</h1>
        <h3 className={styles.date}>{formatDate(new Date())}</h3>
      </div>
      <img
        className={styles.img}
        src={isDark ? themes.light : themes.dark}
        alt="theme icon"
        width={35}
        onClick={handleTheme}
      />
    </header>
  );
};

export default Header;
