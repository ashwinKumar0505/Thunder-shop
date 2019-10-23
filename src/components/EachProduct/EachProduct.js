import React from "react";
import { connect } from "react-redux";
import { storeTheItem } from "../../store/action/CartActionCreators";
import { storeInWishList } from "../../store/action/WishList/WishActionCreators";
import classes from "./EachProduct.module.css";

const EachProduct = props => {
  const state = props.location.state;
  return (
    <div className={classes.outerDiv}>
      <div className={classes.EachProduct}>
        <div className={classes.Images}>
          {state.imagesArray.map(image => {
            return <img src={image} alt="dress" />;
          })}
        </div>
        <div className={classes.Description}>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid #D5D6D9",
              paddingBottom: "20px",
            }}
          >
            <h3 style={{ margin: "0", fontWeight: "550" ,fontSize:"1.5em"}}>
              {state.brandName}
            </h3>
            <p style={{ color: "rgb(126, 127, 130)" }}>{state.title}</p>
          </div>
          <br></br>
          <div className={classes.priceDesc}>
            <h4 style={{fontSize:"1em"}}>
              {" "}
              <span style={{ fontWeight: "500" }}>Rs.{state.price}</span>
              &nbsp;&nbsp;
              <span style={{ textDecoration: "line-through", color: "grey" }}>
                Rs.{state.crossedPrice}
              </span>
              &nbsp;&nbsp;
              <span style={{ color: "#FF905A" }}>({state.discount}% OFF)</span>
            </h4>
            <p style={{ color: "rgb(126, 127, 130)" }}>
              Additional tax shall apply, charged at checkout
            </p>
          </div>
          <div className={classes.SizeDesc}>
            <p style={{ fontSize: "1em" }}>SELECT SIZE </p>
            <div className={classes.AllSize}>
              <div className={classes.Size}>S</div>
              <div className={classes.Size}>M</div>
              <div className={classes.Size}>L</div>
              <div className={classes.Size}>XL</div>
            </div>
          </div>
          <div className={classes.Buttons}>
            <button
              onClick={() => props.storeTheItem(state)}
              disabled={props.disable.includes(state.productId)}
            >
              {props.disable.includes(state.productId) ? "ADDED TO CART" : "ADD TO CART"}
            </button>
            <br></br>
            <br></br>
            <button 
            onClick={() => props.storeInWishList(state)}
             disabled={props.productId.includes(state.productId)}
            >
           {props.productId.includes(state.productId) ? "WISHLISTED" : "WISHLIST"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    disable: state.CartReducer.disable,
    productId: state.WishReducer.productId,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    storeTheItem: product => dispatch(storeTheItem(product)),
    storeInWishList: product => dispatch(storeInWishList(product))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EachProduct);
