import styles from "./Main.module.scss";
import News from "../components/News/News";
import LatestNews from "../components/LatestNews/LatestNews";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <LatestNews />
        <News />
      </div>
    </main>
  );
};

export default Main;
