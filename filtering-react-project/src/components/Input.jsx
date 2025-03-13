import React from "react";
import "../Sidebar/Sidebar.css";

const Input = ({
  setSelectedCategory,
  setSelectedPrice,
  setSelectedColor,
  category,
  value,
  title,
}) => {
  const handleCategoryChange = (event) => {
    if (category === "price") {
      setSelectedPrice(event.target.value);
    } else if (category === "category") {
      setSelectedCategory(event.target.value);
    } else {
      setSelectedColor(event.target.value);
    }
  };

  return (
    <>
      <label className="sidebar-radio-label">
        <input
          type="radio"
          name={category}
          value={value}
          className="sidebar-radio-input"
          onChange={handleCategoryChange}
        />
        <span className="checkmark"></span>
        {title}
      </label>
    </>
  );
};

export default Input;
