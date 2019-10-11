import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import empty from "../../assets/empty.png";
import { removeFromWishList } from "../../store/action/WishList/WishActionCreators";
import { storeTheItem } from "../../store/action/CartActionCreators";
import classes from "./WishList.module.css";
const WishList = props => {
  if (props.products.length !== 0) {
    return (
      <div className={classes.WishList}>
        <h1>My WishList</h1>
        <div className={classes.products}>
          {props.products.map(product => {
            return (
              <div className={classes.eachProduct}>
                <div className={classes.description}>
                  <div
                    className={classes.close}
                    onClick={() => props.removeFromWishList(product.productId)}
                  >
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </div>
                  <img
                    src={product.imagesArray[0]}
                    alt="dress"
                    width="100%"
                    height="100%"
                  />
                  <br></br>
                  <br></br>
                  <p className={classes.title}>{product.title}</p>
                  <br></br>
                  <p>
                    <span style={{ fontWeight: "800" }}>{product.price}</span>
                    &nbsp;&nbsp;
                    <span
                      style={{ textDecoration: "line-through", color: "grey" }}
                    >
                      {product.crossedPrice}
                    </span>
                    &nbsp;&nbsp;
                    <span style={{ color: "#FF905A" }}>
                      ({product.discount}% OFF)
                    </span>
                  </p>
                </div>
                <button
                  disabled={props.disable.includes(product.productId)}
                  onClick={() => props.storeTheItem(product)}
                >
                  {props.disable.includes(product.productId)
                    ? "Product Added"
                    : "Add to Cart"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={classes.EmptyWishList}>
          <div className={classes.Empty}>
            <h3>YOUR WISHLIST IS EMPTY</h3>
            <br></br>
            <p style={{ color: "#94989f" }}>
              Add items that you like to your wishlist. Review them anytime and
              easily move them to the bag.
            </p>
            <br></br>
            <br></br>
            <div>
              <img
                src={empty}
                alt="empty wishList"
                width="200px"
                height="200px"
              />
            </div>
            <br></br>
            <br></br>
            <NavLink to="/all-collection">
              <button className={classes.ContinueShopping}>
                Continue Shopping
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
};
const mapStateToProps = state => {
  return {
    products: state.WishReducer.products,
    disable:state.CartReducer.disable
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeFromWishList: productId => dispatch(removeFromWishList(productId)),
    storeTheItem: (product) => dispatch(storeTheItem(product)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WishList);
