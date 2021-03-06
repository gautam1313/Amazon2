import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const { basket, user } = useStateValue()[0];
  const signHandler = () => {
    if (user) {
      auth.signOut();
    }
  };
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
        <Link to={!user && "/login"}>
          <div onClick={signHandler} className={`${classes["header__option"]}`}>
            <span className={`${classes["header__optionLineOne"]}`}>
              Hello {!user ? "User" : user?.email}
            </span>
            <span className={`${classes["header__optionLineTwo"]}`}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className={`${classes["header__option"]}`}>
            <span className={`${classes["header__optionLineOne"]}`}>
              Returns
            </span>
            <span className={`${classes["header__optionLineTwo"]}`}>
              & Order
            </span>
          </div>
        </Link>
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
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
