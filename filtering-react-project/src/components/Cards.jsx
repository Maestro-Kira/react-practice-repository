import React from "react";
import { FaStar } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

const Cards = ({ itemParams }) => {
  return (
    <>
      {itemParams.map(({ img, title, reviews, prevPrice, newPrice }) => (
        <div className="card" key={uuidv4()}>
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
