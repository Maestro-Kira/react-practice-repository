import Person from "./components/Person";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Person name={"Johny"} age={21} />
      <Product name={"Laptop"} price={2200} />
    </div>
  );
}

export default App;
