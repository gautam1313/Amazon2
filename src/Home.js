import React from "react";
import classes from "./Home.module.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className={`${classes["home"]}`}>
      <div className={`${classes["home__container"]}`}>
        <img
          className={`${classes["home__image"]}`}
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          alt=""
        />
        <div className={`${classes["home__row"]}`}>
          <Product
            title="The lean start"
            image="https://m.media-amazon.com/images/I/410b3ttpfAL.__AC_SY200_.jpg"
            price={29.99}
            rating={3}
          />
          <Product />
        </div>
        <div className={`${classes["home__row"]}`}>
          <Product />
          <Product />
          <Product />
        </div>
        <div className={`${classes["home__row"]}`}>
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
