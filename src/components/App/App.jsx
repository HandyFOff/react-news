import Main from "../../pages/Main";
import Header from "../Header/Header";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  );
};

export default App;