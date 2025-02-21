import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <br />
      <br />
      <button onClick={focusInput}>Focus on input</button>
    </div>
  );
};

export default FocusInput;
