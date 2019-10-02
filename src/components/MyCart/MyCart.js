import React from "react";
import bag from "../../assets/empty_bag.gif"
import classes from "./MyCart.module.css";
const MyCart = () => {
  return <div className={classes.MyCart}>
    <img src={bag} alt="bag" width="250px" height="250px"/>
    <h2>Hey , It feels so light!</h2>
    <p style={{color:"#7e818c",marginBottom:"10px"}}>there is nothing in your bag.Let's add some items</p>
    <button>Click Here To Browse</button>
  </div>
};
export default MyCart;
