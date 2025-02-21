import { useEffect, useState } from "react";

const Timer = () => {
  const [toggleBtn, settoggleBtn] = useState(false);
  const [time, setTime] = useState(0);

  const toggleButton = () => {
    settoggleBtn((prev) => !prev);
  };

  useEffect(() => {
    let interval;

    if (toggleBtn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [toggleBtn]);

  const resetTimer = () => {
    setTime(0);
  };

  return (
    <div>
      <br />
      <button onClick={toggleButton}>{toggleBtn ? "Stop" : "Start"}</button>
      <br />
      <br />
      <button onClick={resetTimer}>Reset</button>
      <p>{time} seconds</p>
    </div>
  );
};

export default Timer;
