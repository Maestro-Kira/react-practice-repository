import { useRef } from "react";

const FocusInput = () => {
  const inputField = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputField.current?.focus();
  };
  return (
    <div>
      <button onClick={handleClick}>CLick me</button>
      <input type="text" placeholder="type please.." ref={inputField} />
    </div>
  );
};
export default FocusInput;
