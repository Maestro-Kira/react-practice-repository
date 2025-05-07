import { useEffect, useReducer, useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  type State = {
    visible: boolean;
    edited: boolean;
    title: string;
  };

  type Action =
    | { type: "SHOW_ITEM" }
    | { type: "HIDE_ITEM" }
    | { type: "EDIT_ITEM" };

  const initialState: State = {
    visible: true,
    edited: true,
    title: "Initial Title",
  };

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "SHOW_ITEM":
        return { ...state, visible: true };
      case "HIDE_ITEM":
        return { ...state, visible: false };
      case "EDIT_ITEM":
        return {
          ...state,
          edited: !state.edited,
          title: state.edited ? "Edited Title" : "Initial Title",
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <div className="main_container space-y-4">
      <h1 className={`title ${!state.visible ? "invisible" : "visible"}`}>
        {state.title}
      </h1>
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => dispatch({ type: "SHOW_ITEM" })}
          className="btn "
        >
          Show Item
        </button>
        <button onClick={() => dispatch({ type: "HIDE_ITEM" })} className="btn">
          Hide Item
        </button>
        <button onClick={() => dispatch({ type: "EDIT_ITEM" })} className="btn">
          Edit Item
        </button>
        <button className="btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Toggle Light mode" : "Toggle Dark mode"}
        </button>
      </div>
    </div>
  );
};

export default App;
