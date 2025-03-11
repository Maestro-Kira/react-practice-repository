import React from "react";

const Buttons = ({ brands }) => {
  return (
    <div>
      {brands.map((item, index) => (
        <button className="recommended-btn" key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
