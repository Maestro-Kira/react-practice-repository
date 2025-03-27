import { useContext } from "react";
import Button from "./components/Button";
import "./index.css";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`main-page ${theme === "light" ? "light-mode" : "dark-mode"}`}
    >
      <Button />
    </div>
  );
};

export default App;
