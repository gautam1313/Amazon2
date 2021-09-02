import React, { useEffect, useState } from "react";
import classes from "./Payment.module.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { basketTotalPrice } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

const Payment = () => {
  const [{ user, basket }, dispatch] = useStateValue();

  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${basketTotalPrice(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((response) => {
        console.log("Payment intent>>>>", response);
        const paymentIntent = response.error
          ? response.error.payment_intent
          : response.paymentIntent;

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setProcessing(false);
        setSucceeded(true);
        setError(null);

        dispatch({
          type: "CLEAR_BASKET",
        });

        history.replace("/orders");
      })
      .catch((error) => console.log("Error>>>>", error.message));
  };
  const handleChange = (e) => {
    // e.preventDefault();
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

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
              <div className={`${classes["payment__priceContainer"]}`}>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  prefix={"$"}
                  value={basketTotalPrice(basket)}
                  thousandSeparator={true}
                  displayType={"text"}
                />
                <button disabled={disable || processing || succeeded}>
                  {processing ? <p>Processing..</p> : "Buy Now"}
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
