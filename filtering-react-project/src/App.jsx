// import { v4 as uuidv4 } from "uuid";
import Navigation from "./Navigation/Navigation";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
function App() {
  return (
    <div>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
