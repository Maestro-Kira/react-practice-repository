import React from "react";
import "./Products.css";
import Cards from "../components/Cards";

const Products = ({ data }) => {
  return (
    <section className="product-container">
      <Cards itemParams={data} />
    </section>
  );
};

export default Products;
