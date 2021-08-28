import React from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={`${classes["login"]}`}>
      <Link to="/">
        <img
          className={`${classes["login__logo"]}`}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Login;
