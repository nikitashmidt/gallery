import { createContext, useState, useMemo } from "react";

const boolean = localStorage.getItem("isDark") === "true" ? true : false;
export const ThemeContext = createContext({ isDark: boolean });
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(boolean);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  localStorage.setItem("isDark", isDark);
  if (isDark) {
    document.body.style.setProperty("--body-background-color", "black");
  } else {
    document.body.style.setProperty("--body-background-color", "white");
  }
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
