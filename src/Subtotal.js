import React from "react";
import classes from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <div className={`${classes["subtotal"]}`}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>{value}</strong>
            </p>
            <small className={`${classes["subtotal__gift"]}`}>
              <input type="checkbox" />
              This order contains gift
            </small>
          </>
        )}
        value={0}
        thousandSeparator={true}
        decimalScale={2}
        prefix={"$"}
        displayType={"text"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
