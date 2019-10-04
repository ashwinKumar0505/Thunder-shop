import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SideDrawer.module.css"
import BackDrop from "../BackDrop/BackDrop"
const SideDrawer = (props) => {
  return (
    <div style={{display:props.display}} className={classes.SideDrawer}>
    <BackDrop show={props.display==="flex" ? true : false} hideHandler={props.hideHandler}/>
    <div className={classes.NavItems} >
      <NavLink to="/new" onClick={props.hideHandler} exact activeClassName={classes.active}>
        <p>NEW-IN</p>
      </NavLink>
      <NavLink to="/men-collection" onClick={props.hideHandler} exact activeClassName={classes.active}>
        <p>MEN-SALE</p>
      </NavLink>
      <NavLink to="/women-collection" onClick={props.hideHandler} exact activeClassName={classes.active}>
        <p>WOMEN-SALE</p>
      </NavLink>
      <NavLink to="/top" onClick={props.hideHandler} exact activeClassName={classes.active}>
        <p>TOP-BRANDS</p>
      </NavLink>
    </div>
     </div>
   
  );
};
export default SideDrawer;
