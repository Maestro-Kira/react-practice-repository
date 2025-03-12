// import { v4 as uuidv4 } from "uuid";
import Navigation from "./Navigation/Navigation";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import products from "./db/data";

function App() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [clickedBrand, setClickedBrand] = useState("All Products");

  const filteredProducts = products.filter(({ title }) =>
    title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <div>
      <Sidebar setSelectedCategory={setSelectedCategory} />
      <Navigation query={query} setQuery={setQuery} />
      <Recommended data={products} setClickedBrand={setClickedBrand} />
      <Products data={filteredProducts} clickedBrand={clickedBrand} />
    </div>
  );
}

export default App;
