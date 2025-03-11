import React from "react";
import "./Products.css";
import { FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import Cards from "../components/Cards";

const Products = ({ data }) => {
  return (
    <section className="product-container">
      <Cards itemParams={data} />
    </section>
  );
};

export default Products;
