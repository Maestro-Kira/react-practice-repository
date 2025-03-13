import React from "react";
import "../Sidebar/Sidebar.css";

const Input = ({
  setSelectedCategory,
  setSelectedPrice,
  category,
  value,
  title,
}) => {
  const handleCategoryChange = (event) => {
    if (category === "price") {
      setSelectedPrice(event.target.value);
    } else {
      setSelectedCategory(event.target.value);
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
