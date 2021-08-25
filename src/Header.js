import React from "react";
import classes from "./Header.module.css";

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
        {/* SearchLogo */}
      </div>
      <div className={`${classes["header__nav"]}`}></div>
    </div>
  );
};

export default Header;
