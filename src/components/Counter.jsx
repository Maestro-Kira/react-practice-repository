import { useReducer, useState } from "react";
import { reducer, initialState } from "./counterReducer";

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [number, setNumber] = useState("");

  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (!number && type !== "reset") return;

    dispatch({ type, value: Number(number) });
    setNumber(""); // Clear input after action
  };

  return (
    <div>
      <h2>Counter: {state.counter}</h2>

      <form>
        <label>Enter a number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <button type="submit" onClick={(e) => handleSubmit(e, "increment")}>
          +
        </button>
        <button type="submit" onClick={(e) => handleSubmit(e, "decrement")}>
          -
        </button>
        <button type="submit" onClick={(e) => handleSubmit(e, "reset")}>
          Reset
        </button>
      </form>
    </div>
  );
};
