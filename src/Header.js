import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <div className={`${classes["header"]}`}>
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className={`${classes["header__logo"]}`}
        alt=""
      />
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
        <div className={`${classes["header__optionBasket"]}`}>
          <ShoppingBasketIcon />
          <span
            className={`${classes["header__optionLineTwo"]} ${classes["header__basketCount"]}`}
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
