import { useTheme } from "../../helpers/hooks/useTheme";
import Main from "../../pages/Main";
import Header from "../Header/Header";
import styles from "./App.module.scss";

const App: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className={`${styles.wrapper} ${isDark ? styles.dark : styles.light}`}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
