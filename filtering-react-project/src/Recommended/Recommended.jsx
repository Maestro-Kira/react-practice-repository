import React from "react";
import "./Recommended.css";
import Buttons from "../components/Buttons";
import { IoCameraOutline } from "react-icons/io5";

const Recommended = ({ data }) => {
  // Extract and sort brands from data.js
  const brands = [
    ...new Set(
      data.map(
        ({ company }) =>
          company.charAt(0).toUpperCase() + company.slice(1).toLowerCase()
      )
    ),
  ].sort();

  const displayBrands = ["All Products", ...brands];

  return (
    <section className="recommended-section">
      <h2 className="recommended-title">Recommended</h2>
      <Buttons brands={displayBrands} />
    </section>
  );
};

export default Recommended;
