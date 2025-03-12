import React from "react";
import "../Sidebar/Sidebar.css";

const Input = ({ setSelectedCategory, category, value, title }) => {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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
