import { createContext, useContext } from "react";

const themeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

const ThemeProvider = themeContext.Provider;

const useTheme = () => {
  return useContext(themeContext);
};

export { themeContext, ThemeProvider, useTheme };
