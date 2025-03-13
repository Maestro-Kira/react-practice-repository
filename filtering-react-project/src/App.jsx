import Navigation from "./Navigation/Navigation";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import products from "./db/data";

function App() {
  //User typing in input query
  const [query, setQuery] = useState("");
  // User clicking on sidebar queries
  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  console.log(selectedCategory);
  console.log(selectedPrice);
  console.log(selectedColor);

  // User clicking on buttons queries
  const [clickedBrand, setClickedBrand] = useState("All Products");

  console.log(clickedBrand);

  const filteredProducts = products.filter(({ title }) =>
    title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <div>
      <Sidebar
        setSelectedCategory={setSelectedCategory}
        setSelectedPrice={setSelectedPrice}
        setSelectedColor={setSelectedColor}
      />
      <Navigation query={query} setQuery={setQuery} />
      <Recommended data={products} setClickedBrand={setClickedBrand} />
      <Products
        data={filteredProducts}
        clickedBrand={clickedBrand}
        selectedCategory={selectedCategory}
        selectedPrice={selectedPrice}
        selectedColor={selectedColor}
      />
    </div>
  );
}

export default App;
