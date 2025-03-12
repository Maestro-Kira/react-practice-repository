import React from "react";
import "./Products.css";
import Cards from "../components/Cards";

const Products = ({ data, clickedBrand }) => {
  //Filter data based on what button clicked
  const filteredData =
    clickedBrand === "All Products"
      ? data
      : data.filter(({ company }) => company === clickedBrand);

  return (
    <section className="product-container">
      <Cards itemParams={filteredData} />
    </section>
  );
};

export default Products;
