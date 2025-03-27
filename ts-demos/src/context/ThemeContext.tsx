import { createContext } from "react";

interface ThemeProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps>({
  theme: "light",
  toggleTheme: () => {},
});
