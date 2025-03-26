import "../styles.css";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button className="btn" onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
    </div>
  );
};
export default ThemeToggle;
