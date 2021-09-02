import React from "react";
import classes from "./Order.module.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className={`${classes["order"]}`}>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className={`${classes["order__id"]}`}>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className={`${classes["order__total"]}`}>Order Total: {value}</h3>
        )}
        value={order.data.amount / 100}
        thousandSeparator={true}
        decimalScale={2}
        prefix={"$"}
        displayType={"text"}
      />
    </div>
  );
};

export default Order;
