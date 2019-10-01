import React, { useState } from "react";
import { connect } from "react-redux";
import Spinner2 from "../Spinner2/Spinner2";
import classes from "./Filter.module.css";
const Filter = props => {
  const array=[]
  
  return (
    <div>
      <p style={{ fontWeight: "800", color: "#f24e6b" }}>BRANDS</p>
      <br></br>
      <div className={classes.Brands}>
        {props.fetched ? (
          <div>
            {props.men[0].brands.map((data, index) => {
              if (array.length !== 0) {
                data = data.toLowerCase();
                if (array.includes(data)) {
                  return null;
                }
                if (data === "") {
                  return null;
                }
              }
              array.push(data)
              return (
                <div className={classes.BrandNames}>
                  <input type="checkbox" className={classes.CheckBox} />
                  <label>{data.charAt(0).toUpperCase() + data.slice(1)}</label>
                </div>
              );
            })}
          </div>
        ) : (
          <Spinner2 />
        )}
      </div>
      <p style={{ marginBottom: "20px", fontWeight: "800", color: "#f24e6b" }}>
        PRICES
      </p>
      <div className={classes.Prices}>
        <div className={classes.EachPrice}>
          <input type="checkbox" className={classes.CheckBox} />
          <label>Rs.299 to Rs.2897</label>
        </div>
        <div className={classes.EachPrice}>
          <input type="checkbox" className={classes.CheckBox} />
          <label>Rs.2897 to 5495</label>
        </div>
        <div className={classes.EachPrice}>
          <input type="checkbox" className={classes.CheckBox} />
          <label>Rs.5495 to 8093</label>
        </div>
      </div>
      <p style={{ margin: "20px 0", fontWeight: "800", color: "#f24e6b" }}>
        DISCOUNTS
      </p>
      <div className={classes.discount}>
        <div className={classes.Discount}>
          <input type="checkbox" className={classes.CheckBox} />
          <label>10% and above</label>
        </div>
        <div className={classes.Discount}>
          <input type="checkbox" className={classes.CheckBox} />
          <label>20% and above</label>
        </div>
        <div className={classes.Discount}>
          <input type="checkbox" className={classes.CheckBox} />
          <label>30% and above</label>
        </div>
        <div className={classes.Discount}>
          <input type="checkbox" className={classes.CheckBox} />
          <label>40% and above</label>
        </div>
        <div className={classes.EachPrice}>
          <input type="checkbox" className={classes.CheckBox} />
          <label>50% and above</label>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    men: state.men,
    fetched: state.fetched,
  };
};

export default connect(mapStateToProps)(Filter);
