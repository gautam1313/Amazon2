import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        alert("Account created!");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={`${classes["login"]}`}>
      <Link to="/">
        <img
          className={`${classes["login__logo"]}`}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className={`${classes["login__container"]}`}>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="submit"
            onClick={signIn}
            className={`${classes["login_signInButton"]}`}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          onClick={register}
          className={`${classes["login__registerButton"]}`}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
