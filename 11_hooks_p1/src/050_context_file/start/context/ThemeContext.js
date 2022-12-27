import { createContext, useContext, useState } from "react";
export const Context = createContext();

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const changeTheme = (e) => {
    setTheme(e.target.value);
  };

  const THEMES = ["light", "dark", "red"];

  return (
    <Context.Provider
      value={{
        THEMES,
        themeState: () => [theme, changeTheme],
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useTheme = () => useContext(Context);
