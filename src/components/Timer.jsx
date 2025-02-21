import { useEffect, useState } from "react";

const Timer = () => {
  const [startTimer, setStartTimer] = useState(false);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval;

    if (startTimer) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [startTimer]);

  const restartTimer = () => {
    setStartTimer(false);
    setTime(0);
  };
  return (
    <div>
      <br />
      <button onClick={() => setStartTimer(true)}>Start Timer</button>
      <br />
      <br />
      <button onClick={() => setStartTimer(false)}>Stop Timer</button>
      <br />
      <br />
      <button onClick={restartTimer}>Reset Timer</button>
      <br />
      <br />
      {time}
    </div>
  );
};

export default Timer;
