import React from "react";
import classes from "./Product.module.css";

const Product = ({ id, title, price, image, rating }) => {
  return (
    <div className={`${classes["product"]}`}>
      <div className={`${classes["product__info"]}`}>
        <p>{title}</p>
        <p className={`${classes["product__price"]}`}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={`${classes["product__rating"]}`}>
          {Array(rating)
            .fill()
            .map((i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
