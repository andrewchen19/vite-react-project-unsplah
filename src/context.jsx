import { createContext, useContext, useState, useEffect } from "react";

const globalContext = createContext();
// create custom Hook
export const useGlobalContext = () => useContext(globalContext);

const AppProvider = (props) => {
  // state
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchText, setSearchText] = useState("cat");

  // function
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    // 找到 <body>，並加入 class (而當這個 class 存在時，則刪除該 class)
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
  };

  return (
    <globalContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchText, setSearchText }}
    >
      {props.children}
    </globalContext.Provider>
  );
};

export default AppProvider;
