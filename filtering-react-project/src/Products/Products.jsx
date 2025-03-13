import React from "react";
import "./Products.css";
import Cards from "../components/Cards";

const Products = ({ data, clickedBrand, selectedCategory, selectedPrice }) => {
  let filteredData = data;

  // Apply brand filter first
  if (clickedBrand !== "All Products") {
    filteredData = filteredData.filter(
      ({ company }) => company === clickedBrand
    );
  }

  // Apply category filter next
  if (selectedCategory !== "") {
    filteredData = filteredData.filter(
      ({ category }) => category === selectedCategory
    );
  }

  if (selectedPrice !== "") {
    filteredData = filteredData.filter(({ newPrice }) => {
      const price = parseFloat(newPrice); // Ensure price is a number
      switch (selectedPrice) {
        case "50":
          return price <= 50;
        case "100":
          return price > 50 && price <= 100;
        case "150":
          return price > 100 && price <= 150;
        case "200":
          return price > 150;
        default:
          return true; // "All" case
      }
    });
  }
  return (
    <section className="product-container">
      <Cards itemParams={filteredData} />
    </section>
  );
};

export default Products;
