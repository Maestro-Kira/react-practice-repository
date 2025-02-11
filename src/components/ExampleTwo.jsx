import { useState } from "react";

const ExampleTwo = () => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 100)
  );

  const generateNewRandomNumber = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setRandomNumber(newNumber);
  };
  return (
    <div>
      <h1>Random number: {randomNumber}</h1>
      <button onClick={generateNewRandomNumber}>Generate New Number</button>
    </div>
  );
};

export default ExampleTwo;
