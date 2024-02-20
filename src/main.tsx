import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./assets/sass/style.scss";
import { ThemeProvider } from "./context/themeContext";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
