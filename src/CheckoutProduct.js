import React from "react";
import classes from "./CheckoutProduct.module.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, price, image, rating }) => {
  const dispatch = useStateValue()[1];
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className={`${classes["checkoutproduct"]}`}>
      <img
        className={`${classes["checkoutproduct__image"]}`}
        src={image}
        alt=""
      />
      <div className={`${classes["checkoutproduct__info"]}`}>
        <p className={`${classes["checkoutproduct__title"]}`}>{title}</p>
        <p className={`${classes["checkoutproduct__price"]}`}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={`${classes["checkoutproduct__rating"]}`}>
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeItem}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
