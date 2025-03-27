import { useReducer } from "react";

type State = {
  counter: number;
};

type Increment = {
  type: "increment";
};

type Decrement = {
  type: "decrement";
};

type Reset = {
  type: "reset";
};

type Action = Increment | Decrement | Reset;

const initialState = { counter: 0 };
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "reset":
      return { counter: 0 };

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <p>Counter: {state.counter} </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Counter;
