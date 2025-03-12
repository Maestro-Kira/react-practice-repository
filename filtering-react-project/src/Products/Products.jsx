import React from "react";
import "./Products.css";
import Cards from "../components/Cards";
/**
 *     
    title: "Flat Slip On Pumps",
    reviews: "(56 reviews)",
    prevPrice: "$120.00",
    newPrice: "75",
    company: "Vans",
    color: "green",
    category: "flats",
 */
const Products = ({ data, clickedBrand, selectedCategory }) => {
  //Filter data based on what button is clicked or user choice in the sidebar
  // const filteredData =
  //   clickedBrand === "All Products"
  //     ? data
  //     : data.filter(({ company }) => company === clickedBrand);

  let filteredData;

  if (clickedBrand === "All Products" || selectedCategory === "") {
    filteredData = data; // Include all products if "All Products" is selected
  } else {
    filteredData = data.filter(({ company }) => company === clickedBrand); // Filter by the selected brand
  }

  if (selectedCategory !== "") {
    filteredData = data.filter(({ category }) => category === selectedCategory);
  }

  return (
    <section className="product-container">
      <Cards itemParams={filteredData} />
    </section>
  );
};

export default Products;
