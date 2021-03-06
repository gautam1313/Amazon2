import React from "react";
import classes from "./Subtotal.module.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { basketTotalPrice } from "./reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const { basket } = useStateValue()[0];
  const history = useHistory();
  return (
    <div className={`${classes["subtotal"]}`}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className={`${classes["subtotal__gift"]}`}>
              <input type="checkbox" />
              This order contains gift
            </small>
          </>
        )}
        value={basketTotalPrice(basket)}
        thousandSeparator={true}
        decimalScale={2}
        prefix={"$"}
        displayType={"text"}
      />
      <button
        onClick={() => {
          history.push("/payment");
        }}
        disabled={basket?.length > 0 ? false : true}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
