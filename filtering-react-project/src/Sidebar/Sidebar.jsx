import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar-section">
        <span className="sidebar-cart">🛒</span>

        <div className="sidebar-category-select">
          <h2 className="sidebar-title">Category</h2>
          <label className="sidebar-radio-label">
            <input
              type="radio"
              name="category"
              value=""
              className="sidebar-radio-input"
            />
            <span className="checkmark"></span>
            All
          </label>
          <label>
            <input type="radio" name="category" value="sneakers" /> Sneakers
          </label>
          <label>
            <input type="radio" name="category" value="flats" /> Flats
          </label>
          <label>
            <input type="radio" name="category" value="sandals" /> Sandals
          </label>
          <label>
            <input type="radio" name="category" value="heels" /> Heels
          </label>
        </div>

        <div className="sidebar-category-select">
          <h2 className="sidebar-title">Price</h2>
          <label>
            <input type="radio" name="price" value="" /> All
          </label>
          <label>
            <input type="radio" name="price" value="" /> $0-50
          </label>
          <label>
            <input type="radio" name="price" value="" /> $50-100
          </label>
          <label>
            <input type="radio" name="price" value="" /> $100-150
          </label>
          <label>
            <input type="radio" name="price" value="" /> Over $150
          </label>
        </div>

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
