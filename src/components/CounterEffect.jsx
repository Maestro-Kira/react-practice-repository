import { useState } from "react";
import { useEffect } from "react";

const CounterEffect = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = `Counter is ${counter}`;
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default CounterEffect;
