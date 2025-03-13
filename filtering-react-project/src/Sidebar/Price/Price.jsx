import React from "react";
import "../Sidebar.css";
import Input from "../../components/Input";

const Price = ({ setSelectedCategory, setSelectedPrice }) => {
  return (
    <>
      <div className="sidebar-category-select">
        <h2 className="sidebar-title">Price</h2>

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          category="price"
          value=""
          title="All"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          category="price"
          value="50"
          title="$0-50"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          category="price"
          value="100"
          title="$50-100"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          category="price"
          value="150"
          title="$100-$150"
        />

        <Input
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          category="price"
          value="200"
          title="Over $150"
        />
      </div>
    </>
  );
};

export default Price;
