import { useStore } from "../store";

const OtherComponent = () => {
  const { increment, decrement } = useStore();

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
export default OtherComponent;
