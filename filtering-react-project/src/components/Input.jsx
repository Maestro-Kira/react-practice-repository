import React from "react";
import "../Sidebar/Sidebar.css";

const Input = ({ setSelectedCategory, category, value, title }) => {
  return (
    <>
      <label className="sidebar-radio-label">
        <input
          type="radio"
          name={category}
          value={value}
          className="sidebar-radio-input"
        />
        <span className="checkmark"></span>
        {title}
      </label>
    </>
  );
};

export default Input;
