import styles from "./Main.module.scss";
import News from "../components/News/News";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <News />
      </div>
    </main>
  );
};

export default Main;
