import { useContext } from "react";
import ThemeToggle from "./components/ThemeToggle";
import "./styles.css";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`main-div ${theme === "dark" ? "dark-mode" : "light-mode"}`}
    >
      <h1>Hello world!</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;
