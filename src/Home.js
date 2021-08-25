import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${classes["home"]}`}>
      <div className={`${classes["home__container"]}`}>
        <img
          className={`${classes["home__image"]}`}
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
