import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import cart from "../../assets/cart3.png";
import wish from "../../assets/wish.png";
import SideDrawer from "../SideDrawer/SideDrawer";
import classes from "./Header.module.css";
const Header = props => {
  const [showSideDrawer, setShowSideDrawer] = useState("none");
  const showHandler = () => {
    setShowSideDrawer("flex");
  };
  const hideHandler = () => {
    setShowSideDrawer("none");
  };
  return (
    <div className={classes.Header} style={{backgroundColor:props.color,color:props.textColor}}>
      <div className={classes.burger} onClick={showHandler}>
        <div className={classes.line} style={{backgroundColor:props.textColor}}></div>
        <div className={classes.line} style={{backgroundColor:props.textColor}}></div>
        <div className={classes.line} style={{backgroundColor:props.textColor}}></div>
      </div>
      <SideDrawer display={showSideDrawer} hideHandler={hideHandler} />
      <NavLink to="/" exact activeClassName={classes.active}>
        <h1>THUNDER</h1>
      </NavLink>
      <div className={classes.NavItems}>
        <NavLink to="/all-collection" exact activeClassName={classes.active}>
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
        <NavLink to="/wish-list">
          <img
            src={wish}
            alt="wish-list"
            width="50px"
            height="50px"
            style={{ margin: "0px" }}
          />
        </NavLink>
        <NavLink to="/my-cart">
          <img
            src={cart}
            alt="cart-icon"
            width="60px"
            height="50px"
            style={{ margin: "0px" }}
            className={classes.cartImage}
          />
          <div className={classes.itemsCount}>{props.items.length}</div>
        </NavLink>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    items: state.CartReducer.items,
  };
};

export default connect(mapStateToProps)(Header);
