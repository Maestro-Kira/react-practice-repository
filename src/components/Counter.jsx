import { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  const increment = () => {
    setCounter((prevNum) => prevNum + 1);
  };

  const decrement = () => {
    setCounter((prevNum) => prevNum - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>You clicked {count} times ヾ(≧▽≦*)o </p>
      <button onClick={increment}>Click Click!</button>
      <button onClick={decrement}>UnClick?! ಥ_ಥ</button>
    </div>
  );
};

export default Counter;
