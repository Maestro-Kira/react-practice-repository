import React from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
const Sidebar = ({ setSelectedCategory, setSelectedPrice }) => {
  return (
    <>
      <section className="sidebar-section">
        <span className="sidebar-cart">🛒</span>

        <Category
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
        />

        <Price
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
        />

        {/* COLOR */}
        <div className="sidebar-category-select">
          <h2 className="sidebar-title">Color</h2>
          <label>
            <input type="radio" name="color" value="" /> All
          </label>
          <label>
            <input type="radio" name="color" value="black" /> Black
          </label>
          <label>
            <input type="radio" name="color" value="blue" /> Blue
          </label>
          <label>
            <input type="radio" name="color" value="red" /> Red
          </label>
          <label>
            <input type="radio" name="color" value="green" /> Green
          </label>
          <label>
            <input type="radio" name="color" value="white" /> White
          </label>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
