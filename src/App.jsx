import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import { ParentComponent } from "./components/Context";

function App() {
  return (
    <div>
      <ParentComponent>
        <ComponentA />
        <ComponentB />
      </ParentComponent>
    </div>
  );
}

export default App;
