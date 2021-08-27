import React from "react";
import classes from "./Checkout.module.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const { basket } = useStateValue()[0];
  return (
    <div className={`${classes["checkout"]}`}>
      <div className={`${classes["checkout__left"]}`}>
        <img
          className={`${classes["checkout__ad"]}`}
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className={`${classes["checkout__title"]}`}>
            Your shopping basket
          </h2>
          <CheckoutProduct
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
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
      <div className={`${classes["checkout__right"]}`}>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
