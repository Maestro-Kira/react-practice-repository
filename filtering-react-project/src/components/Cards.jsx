import React from "react";
import { FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const Cards = ({ itemParams }) => {
  return (
    <>
      {itemParams.map(({ img, title, reviews, prevPrice, newPrice }, index) => (
        <div className="card" key={index}>
          <img src={img} alt={title} className="product-img" />
          <span className="product-title">{title}</span>
          <div className="product-reviews-section">
            <FaStar className="product-star" />
            <FaStar className="product-star" />
            <FaStar className="product-star" />
            <FaStar className="product-star" />
            <span>{reviews}</span>
          </div>
          <div className="product-price">
            <span>
              <del>{prevPrice}</del> ${newPrice}
            </span>
            <FaBasketShopping className="product-basket" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
