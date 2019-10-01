import React from "react";
import { connect } from "react-redux";
import classes from "./Dress.module.css";
import Spinner2 from "../Spinner2/Spinner2";
const Dress = props => {
  return props.fetched ? (
    <div className={classes.Dresses}>
      {props.men[0].productsArray.map(product => {
        return (
          <div className={classes.EachDress}>
            <img src={product.imagesArray[0]} alt="dress image" />
            <br></br>
            <p>{product.title}</p>
            <p style={{fontWeight:"800"}}>{product.brandName}</p>
            <p>
              <span style={{ marginRight:"10px"}}>Rs.{product.price}</span>
              <span style={{textDecoration:"line-through"}}>Rs.{product.crossedPrice}</span>
            </p>
              <span style={{color:"#f24e6b",marginBottom:"25px"}}>({product.discount}% discount)</span>{" "}
          <button className={classes.CartButton}>Add to cart</button>
          </div>
        );
      })}
    </div>
  ) : (
    <div className={classes.spinner}>
    <Spinner2 />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    men: state.men,
    fetched: state.fetched,
  };
};
export default connect(mapStateToProps)(Dress);
