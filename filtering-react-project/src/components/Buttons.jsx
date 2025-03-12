import React from "react";
import { v4 as uuidv4 } from "uuid";

const Buttons = ({ brands, setClickedBrand }) => {
  const handleClick = (brand) => {
    setClickedBrand(brand);
  };

  return (
    <div>
      {brands.map((item) => (
        <button
          className="recommended-btn"
          key={uuidv4()}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
