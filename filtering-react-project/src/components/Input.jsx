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
  const isColorFilter = category === "color";
  const isAll = value === ""; // Check if it's the "All" button

  const backgroundStyle =
    isColorFilter && isAll
      ? { background: "linear-gradient(90deg, red, blue, green, white)" }
      : isColorFilter
      ? { backgroundColor: value }
      : {}; // If it's not a color filter, don't apply styles

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
        <span className="checkmark" style={backgroundStyle}></span>
        {title}
      </label>
    </>
  );
};

export default Input;
