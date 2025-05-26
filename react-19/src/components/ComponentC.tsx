import { useUserContext } from "./userContext";

const ComponentC = () => {
  const { age } = useUserContext();
  return <div>{age}</div>;
};
export default ComponentC;
