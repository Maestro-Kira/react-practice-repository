import { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => {
    let savedNumber = localStorage.getItem("number");
    return savedNumber ? JSON.parse(savedNumber) : 0;
  });

  useEffect(() => {
    localStorage.setItem("number", JSON.stringify(count));
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
