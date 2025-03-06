// import { v4 as uuidv4 } from "uuid";
import Navigation from "./Navigation/Navigation";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
function App() {
  return (
    <div>
      <Navigation />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
