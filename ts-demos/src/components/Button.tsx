import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div>
      <button onClick={toggleTheme}>
        Change to {theme === "light" ? "dark" : "light"} theme
      </button>
    </div>
  );
};
export default Button;
