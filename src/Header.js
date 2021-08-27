import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  useStateValue();
  return (
    <div className={`${classes["header"]}`}>
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className={`${classes["header__logo"]}`}
          alt=""
        />
      </Link>
      <div className={`${classes["header__search"]}`}>
        <input type="text" className={`${classes["header__searchInput"]}`} />
        <SearchIcon className={`${classes["header__searchIcon"]}`} />
      </div>
      <div className={`${classes["header__nav"]}`}>
        <div className={`${classes["header__option"]}`}>
          <span className={`${classes["header__optionLineOne"]}`}>
            Hello User
          </span>
          <span className={`${classes["header__optionLineTwo"]}`}>Sign In</span>
        </div>
        <div className={`${classes["header__option"]}`}>
          <span className={`${classes["header__optionLineOne"]}`}>Returns</span>
          <span className={`${classes["header__optionLineTwo"]}`}>& Order</span>
        </div>
        <div className={`${classes["header__option"]}`}>
          <span className={`${classes["header__optionLineOne"]}`}>Your</span>
          <span className={`${classes["header__optionLineTwo"]}`}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={`${classes["header__optionBasket"]}`}>
            <ShoppingBasketIcon />
            <span
              className={`${classes["header__optionLineTwo"]} ${classes["header__basketCount"]}`}
            >
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
