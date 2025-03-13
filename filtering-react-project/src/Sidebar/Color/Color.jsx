import React from "react";
import "../Sidebar.css";
import Input from "../../components/Input";

const Color = ({ setSelectedCategory, setSelectedPrice, setSelectedColor }) => {
  return (
    <>
      <div className="sidebar-category-select">
        <h2 className="sidebar-title">Color</h2>

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
          category="color"
          value=""
          title="All Colors"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
          category="color"
          value="black"
          title="Black"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
          category="color"
          value="blue"
          title="Blue"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
          category="color"
          value="red"
          title="Red"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
          category="color"
          value="green"
          title="Green"
        />
      </div>
    </>
  );
};

export default Color;
