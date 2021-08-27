import React from "react";
import classes from "./Product.module.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, image, rating }) => {
  const dispatch = useStateValue()[1];
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  };
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
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
