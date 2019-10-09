import React, { useRef,useState } from "react";
import { connect } from "react-redux";
import Spinner2 from "../Spinner2/Spinner2";
import { storeTheItem } from "../../store/action/CartActionCreators";

import classes from "./Dress.module.css";
const Dress = props => {
  const myRef = useRef(null);
  let results = 0;
  let notFound = 0;
  let noSearch = true;
  if (props.productToBeSearched) {
    noSearch = false;
  }
 
  return props.fetched ? (
    <div className={classes.Dresses}>
      {props.details.map((detail, index) => {
        results = detail.productsArray.length;
        return detail.productsArray.map(product => {
          if (props.filterBrands.length > 0) {
            if (
              props.filterBrands.includes(product.brandName.toLowerCase()) &&
              product.price >= props.initialPrice &&
              product.price <= props.finalPrice &&
              product.discount >= props.discount
            ) {
              
              return (
                <div className={classes.EachDress} key={product.productId}>
                  <img src={product.imagesArray[0]} alt="dress" ref={myRef} />
                  <br></br>
                  <p>{product.title}</p>
                  <p style={{ fontWeight: "800" }}>{product.brandName}</p>
                  <p>
                    <span style={{ marginRight: "10px" }}>
                      Rs.{product.price}
                    </span>
                    <span style={{ textDecoration: "line-through" }}>
                      Rs.{product.crossedPrice}
                    </span>
                  </p>
                  <span style={{ color: "#f24e6b", marginBottom: "25px" }}>
                    ({product.discount}% discount)
                  </span>{" "}
                  <button
                    className={classes.CartButton}
                    onClick={() => props.storeTheItem(product)}
                  >
                    Add to cart
                  </button>
                </div>
              );
            } else {
              return false;
            }
          } else {
           
            if (
              noSearch ||
              product.brandName
                .toLowerCase()
                .includes(props.productToBeSearched.toLowerCase())
            ) {
              if (
                product.price >= props.initialPrice &&
                product.price <= props.finalPrice &&
                product.discount >= props.discount
              ) {
                return (
                  <div className={classes.EachDress} key={product.title}>
                    <img src={product.imagesArray[0]} alt="dress" ref={myRef} />
                    <br></br>
                    <p>{product.title}</p>
                    <p style={{ fontWeight: "800" }}>{product.brandName}</p>
                    <p>
                      <span style={{ marginRight: "10px" }}>
                        Rs.{product.price}
                      </span>
                      <span style={{ textDecoration: "line-through" }}>
                        Rs.{product.crossedPrice}
                      </span>
                    </p>
                    <span style={{ color: "#f24e6b", marginBottom: "25px" }}>
                      ({product.discount}% discount)
                    </span>{" "}
                    <button
                      className={classes.CartButton}
                      disabled={props.disable.includes(product.productId)}
                      onClick={() => props.storeTheItem(product)}
                    >
                      {props.disable.includes(product.productId) ? "Product Added" : "Add to Cart"}
                    </button>
                  </div>
                );
              } else {
                return false;
              }
            } else {
              notFound = notFound + 1;
              
              if (notFound === results) {
                return <div className={classes.notFound}>
                  <h5>No Results For <span style={{color:"red"}}>{props.productToBeSearched}</span> </h5>
                  <p>Try checking your spelling or use more general terms</p>
                  </div>;
              } else {
                return false;
              }
            }
          }
        });
      })}
      {props.fetched ? (
        <div className={classes.spinner}>
          <Spinner2 />
        </div>
      ) : null}
    </div>
  ) : (
    <div className={classes.spinner}>
      <Spinner2 />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    fetched: state.Reducer.fetched,
    disable: state.CartReducer.disable,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    storeTheItem: details => dispatch(storeTheItem(details)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dress);
