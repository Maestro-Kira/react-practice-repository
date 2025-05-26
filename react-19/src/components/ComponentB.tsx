import { useUserContext } from "./userContext";

const ComponentB = () => {
  const { name } = useUserContext();

  return <div> {name}</div>;
};
export default ComponentB;
