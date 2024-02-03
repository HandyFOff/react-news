import { createContext, useState } from "react";
import { IThemeContext } from "../interfaces";

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [isDark, setisDark] = useState(false);

  const handleTheme = () => {
    setisDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
