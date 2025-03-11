// import { v4 as uuidv4 } from "uuid";
import Navigation from "./Navigation/Navigation";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import products from "./db/data";

function App() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <div>
      <Sidebar />
      <Navigation query={query} setQuery={setQuery} />
      <Recommended data={products} />
      <Products data={filteredProducts} />
    </div>
  );
}

export default App;
