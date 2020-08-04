import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import men from "../../assets/men.jpg";
import women from "../../assets/women1.jpg";
import classes from "./ChooseGender.module.css";

const ChooseGender = () => {
  return (
    <div className={classes.ChooseGender}>
      <div className={classes.Offer}>
        <h1 className={classes.NewIn}>New In</h1>
        <h3 className={classes.styles}>FRESH </h3>
        <h3 className={classes.styles}> STYLES</h3>
        <h3 className={classes.styles}>{"&"} SWEET </h3>
        <h3 className={classes.styles}> TREATS</h3>
        <div className={classes.Price}>
          <p>&#x20b9;500 OFF*</p>
          <p>
            ON &#x20b9;1999<span> Take 500</span>
          </p>
        </div>
        <div className={classes.Price}>
          <p>&#x20b9;1000 OFF*</p>
          <p>
            ON &#x20b9;2999 <span>Take 1000</span>
          </p>
        </div>
        <NavLink to="/all-collection">
          <Button>SHOP NOW</Button>
        </NavLink>
      </div>
      <div className={classes.men}>
        <img src={men} alt="men-icon" height="100%" width="100%" />
        <NavLink to="/men-collection">
          <div className={classes.buttonStyle}>
            <Button>MEN COLLECTION</Button>
          </div>
        </NavLink>
      </div>
      <div className={classes.women}>
        <img src={women} alt="men-icon" height="100%" width="100%" />
        <NavLink to="/women-collection">
          <div className={classes.buttonStyle}>
            <Button>WOMEN COLLECTION</Button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default ChooseGender;
