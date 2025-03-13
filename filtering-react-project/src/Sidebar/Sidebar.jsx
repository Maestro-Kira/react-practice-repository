import React from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Color from "./Color/Color";
const Sidebar = ({
  setSelectedCategory,
  setSelectedPrice,
  setSelectedColor,
}) => {
  return (
    <>
      <section className="sidebar-section">
        <span className="sidebar-cart">🛒</span>

        <Category
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
        />

        <Price
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
        />

        <Color
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
        />
      </section>
    </>
  );
};

export default Sidebar;
