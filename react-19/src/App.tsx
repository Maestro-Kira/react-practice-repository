import OtherComponent from "./components/OtherComponent";
import { useStore } from "./store";

const App = () => {
  const { count } = useStore();
  return (
    <div>
      <h1>Count: {count}</h1>
      <OtherComponent />
    </div>
  );
};
export default App;
