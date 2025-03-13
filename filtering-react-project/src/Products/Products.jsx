import React from "react";
import "./Products.css";
import Cards from "../components/Cards";

const Products = ({
  data,
  clickedBrand,
  selectedCategory,
  selectedPrice,
  selectedColor,
}) => {
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

  // Apply color filter next

  if (selectedColor !== "") {
    filteredData = filteredData.filter(({ color }) => color === selectedColor);
  }
  // Apply price filter next

  if (selectedPrice !== "") {
    filteredData = filteredData.filter(({ newPrice }) => {
      const price = parseFloat(newPrice);
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
          return true;
      }
    });
  }
  //Render cards after filtering
  return (
    <section className="product-container">
      {filteredData.length > 0 ? (
        <Cards itemParams={filteredData} />
      ) : (
        <h2>
          No products were found with the given parameters. Try adjusting your
          search filters.
        </h2>
      )}
    </section>
  );
};

export default Products;
