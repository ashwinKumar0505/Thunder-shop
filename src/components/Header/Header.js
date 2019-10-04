import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import cart from "../../assets/cart3.png";
import login from "../../assets/login1.png";
import classes from "./Header.module.css";
import SideDrawer from "../SideDrawer/SideDrawer"
const Header = () => {
  const [showSideDrawer,setShowSideDrawer]=useState("none")
  const showHandler=()=>{
      setShowSideDrawer("flex")
  }
  const hideHandler=()=>{
    setShowSideDrawer("none")
  }
  return (
    <div className={classes.Header}>
      <div className={classes.burger} onClick={showHandler}>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>
      <SideDrawer display={showSideDrawer} hideHandler={hideHandler}/>
      <NavLink to="/" exact activeClassName={classes.active}>
        <h1>THUNDER</h1>
      </NavLink>
      <div className={classes.NavItems}>
        <NavLink to="/new" exact activeClassName={classes.active}>
          <p>NEW-IN</p>
        </NavLink>
        <NavLink to="/men-collection" exact activeClassName={classes.active}>
          <p>MEN-SALE</p>
        </NavLink>
        <NavLink to="/women-collection" exact activeClassName={classes.active}>
          <p>WOMEN-SALE</p>
        </NavLink>
        <NavLink to="/top" exact activeClassName={classes.active}>
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
