import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";
import "./Navigation.css";
const Navigation = () => {
  return (
    <>
      <nav className="nav-section">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Enter your search shoes.."
          className="nav-search-bar"
        />
        <div className="nav-icons-section">
          <FaHeart className="nav-icons" />
          <IoCartOutline className="nav-icons" />
          <IoMdPersonAdd className="nav-icons" />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
