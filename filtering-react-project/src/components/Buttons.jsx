import React from "react";
import { v4 as uuidv4 } from "uuid";

const Buttons = ({ brands }) => {
  return (
    <div>
      {brands.map((item) => (
        <button className="recommended-btn" key={uuidv4()}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
