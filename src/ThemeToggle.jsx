import { useGlobalContext } from "./context";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <div className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsMoonFill className="toggle-icon-dark" />
        ) : (
          <BsSunFill className="toggle-icon-light" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
