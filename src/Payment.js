import React, { useEffect } from "react";
import classes from "./Payment.module.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment = () => {
  const { user, basket } = useStateValue()[0];

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e) => {
    e.preventdefault();
  };
  const handleChange = (e) => {
    e.preventDefault();
  };

  const history = useHistory();
  useEffect(() => {
    if (basket?.length === 0) {
      history.replace("/checkout");
    }
  }, [basket, history]);
  return (
    <div className={`${classes["payment"]}`}>
      <div className={`${classes["payment__container"]}`}>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className={`${classes["payment__section"]}`}>
          <div className={`${classes["payment__title"]}`}>
            <h3>Delivery Address</h3>
          </div>
          <div className={`${classes["payment__address"]}`}>
            <p>{!user ? "user" : user?.email}</p>
            <p>Santiago Bernabau</p>
            <p>Madrid, ESP</p>
          </div>
        </div>
        <div className={`${classes["payment__section"]}`}>
          <div className={`${classes["payment__title"]}`}>
            <h3>Review items and delivery</h3>
          </div>
          <div className={`${classes["payment__items"]}`}>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className={`${classes["payment__section"]}`}>
          <div className={`${classes["payment__title"]}`}>
            <h3>Payment Method</h3>
          </div>
          <div className={`${classes["payment__details"]}`}>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
