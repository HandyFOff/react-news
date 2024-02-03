import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./assets/sass/style.scss";
import { ThemeProvider } from "./context/themeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
