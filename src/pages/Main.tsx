import styles from "./Main.module.scss";
import News from "../components/News/News";
import LatestNews from "../components/LatestNews/LatestNews";
import { useTheme } from "../helpers/hooks/useTheme";

const Main: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <main className={styles.main}>
      <div
        className={`${styles.container} ${isDark ? styles.dark : styles.light}`}
      >
        <LatestNews />
        <News />
      </div>
    </main>
  );
};

export default Main;
