import React from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
const Sidebar = (setSelectedCategory) => {
  return (
    <>
      <section className="sidebar-section">
        <span className="sidebar-cart">🛒</span>
        <Category setSelectedCategory={setSelectedCategory} />
        {/* PRICE */}
        <div className="sidebar-category-select">
          <h2 className="sidebar-title">Price</h2>

          <label className="sidebar-radio-label">
            <input
              type="radio"
              name="price"
              value=""
              className="sidebar-radio-input"
            />
            <span className="checkmark"></span>
            All
          </label>

          <label className="sidebar-radio-label">
            <input
              type="radio"
              name="price"
              value="50"
              className="sidebar-radio-input"
            />
            <span className="checkmark"></span>
            $0-50
          </label>

          <label className="sidebar-radio-label">
            <input
              type="radio"
              name="price"
              value="100"
              className="sidebar-radio-input"
            />
            <span className="checkmark"></span>
            $50-100
          </label>

          <label className="sidebar-radio-label">
            <input
              type="radio"
              name="price"
              value="150"
              className="sidebar-radio-input"
            />
            <span className="checkmark"></span>
            $100-150
          </label>

          <label className="sidebar-radio-label">
            <input
              type="radio"
              name="price"
              value="200"
              className="sidebar-radio-input"
            />
            <span className="checkmark"></span>
            Over $150
          </label>
        </div>

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
