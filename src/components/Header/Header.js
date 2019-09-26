import React from 'react';
import cart from "../../assets/cart3.png"
import login from "../../assets/login1.png"
import classes from './Header.module.css';
const Header =()=>{
  return (
    <div className={classes.Header}>
    <h1>THUNDER</h1>
    <div className={classes.NavItems}>
      <p>NEW-IN</p>
      <p>MEN-SALE</p>
      <p>WOMEN-SALE</p>
      <p>TOP-BRANDS</p>
    </div>
    <div className={classes.Images}>
     <span><img src={login} alt="login-icon" width="50px" height="50px"/></span>
     <span><img src={cart} alt="cart-icon" width="70px" height="50px"/></span>
    </div>
    </div>
  )
}

export default Header;