import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Buttons = ({ brands, setClickedBrand }) => {
  const [selectedOption, setSelectedOption] = useState("All Products");
  const handleClick = (brand) => {
    setSelectedOption(brand);
    setClickedBrand(brand);
  };

  return (
    <div>
      {brands.map((item) => (
        <button
          className={`recommended-btn ${
            selectedOption === item ? "active" : ""
          }`}
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
