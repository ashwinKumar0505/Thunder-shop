import React from "react";
import { NavLink } from "react-router-dom";
import cart from "../../assets/cart3.png";
import login from "../../assets/login1.png";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.Header}>
      <h1>THUNDER</h1>
      <div className={classes.NavItems}>
        <NavLink to="/">
          <p>NEW-IN</p>
        </NavLink>
        <NavLink to="/men-collection">
          <p>MEN-SALE</p>
        </NavLink>
        <NavLink to="/women-collection">
          <p>WOMEN-SALE</p>
        </NavLink>
        <NavLink to="/">
          <p>TOP-BRANDS</p>
        </NavLink>
      </div>
      <div className={classes.Images}>
        <span>
          <img src={login} alt="login-icon" width="50px" height="50px" />
        </span>
        <NavLink to="/my-cart">
          <span>
            <img src={cart} alt="cart-icon" width="70px" height="50px" />
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
