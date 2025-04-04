import React from "react";
import "../Sidebar.css";
import Input from "../../components/Input";

const Category = ({
  setSelectedCategory,
  setSelectedPrice,
  setSelectedColor,
}) => {
  return (
    <>
      <div className="sidebar-category-select">
        <h2 className="sidebar-title">Category</h2>

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
          category="category"
          value=""
          title="All"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
          category="category"
          value="sneakers"
          title="Sneakers"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
          category="category"
          value="flats"
          title="Flats"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
          category="category"
          value="sandals"
          title="Sandals"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedColor={setSelectedColor}
          category="category"
          value="heels"
          title="Heels"
        />
      </div>
    </>
  );
};

export default Category;
