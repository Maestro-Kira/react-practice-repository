// import { v4 as uuidv4 } from "uuid";
import Navigation from "./Navigation/Navigation";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import products from "./db/data";

function App() {
  const [selectedCategory, setselectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // const handleClick = (e) => {
  //   setselectedCategory(e.target.value);
  // };

  return (
    <div>
      <Sidebar />
      <Navigation />
      <Recommended data={products} />
      <Products data={products} />
    </div>
  );
}

export default App;
