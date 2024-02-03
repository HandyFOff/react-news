import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("context undefined");
  }

  return context;
};
