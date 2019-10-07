import React from "react";
import Spinner2 from "../Spinner2/Spinner2";
import classes from "./Filter.module.css";
const Filter = props => {
  const array = [];
  return (
    <div className={classes.filter}>
      <p style={{ fontWeight: "800", color: "#f24e6b" }}>BRANDS</p>
      <br></br>
      <div className={classes.Brands}>
        {props.details[0] ? (
          <div>
            {props.details[0].brands.map((data, index) => {
              if (array.length !== 0) {
                data = data.toLowerCase();
                if (array.includes(data)) {
                  return null;
                }
                if (data === "") {
                  return null;
                }
              }
              array.push(data);
              return (
                <div className={classes.BrandNames}>
                  <input
                    type="checkbox"
                    className={classes.CheckBox}
                    name={data.toLowerCase()}
                    onChange={props.filteringItems}
                  />
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
          <input
            type="checkbox"
            className={classes.CheckBox}
            onChange={event => {
              props.setPriceRange(event, 299, 2897, 0);
            }}
          />
          <label>Rs.299 to Rs.2897</label>
        </div>
        <div className={classes.EachPrice}>
          <input
            type="checkbox"
            className={classes.CheckBox}
            onChange={event => {
              props.setPriceRange(event, 2897, 5495, 1);
            }}
          />
          <label>Rs.2897 to 5495</label>
        </div>
        <div className={classes.EachPrice}>
          <input
            type="checkbox"
            className={classes.CheckBox}
            onChange={event => {
              props.setPriceRange(event, 5495, 8093, 2);
            }}
          />
          <label>Rs.5495 to 8093</label>
        </div>
      </div>
      <p style={{ margin: "20px 0", fontWeight: "800", color: "#f24e6b" }}>
        DISCOUNTS
      </p>
      <div className={classes.discount}>
         <div className={classes.Discount}>
          <input
            type="radio"
            className={classes.CheckBox}
            value="option0"
            checked={props.selectedOption === "option0"}
            onChange={event => {
              props.setDiscountRange(event,0);
            }}
          />
          <label>All Discount</label>
        </div>
        <div className={classes.Discount}>
          <input
            type="radio"
            className={classes.CheckBox}
            value="option1"
            checked={props.selectedOption === "option1"}
            onChange={event => {
              props.setDiscountRange(event, 10);
            }}
          />
          <label>10% and above</label>
        </div>
       
        <div className={classes.Discount}>
          <input
            type="radio"
            className={classes.CheckBox}
            value="option2"
            checked={props.selectedOption === "option2"}
            onChange={event => {
              props.setDiscountRange(event, 20);
            }}
          />
          <label>20% and above</label>
        </div>
        <div className={classes.Discount}>
          <input
            type="radio"
            className={classes.CheckBox}
            value="option3"
            checked={props.selectedOption === "option3"}
            onChange={event => {
              props.setDiscountRange(event, 30);
            }}
          />
          <label>30% and above</label>
        </div>
        <div className={classes.Discount}>
          <input
            type="radio"
            className={classes.CheckBox}
            value="option4"
            checked={props.selectedOption === "option4"}
            onChange={event => {
              props.setDiscountRange(event, 40);
            }}
          />
          <label>40% and above</label>
        </div>
        <div className={classes.EachPrice}>
          <input
            type="radio"
            className={classes.CheckBox}
            value="option5"
            checked={props.selectedOption === "option5"}
            onChange={event => {
              props.setDiscountRange(event, 50);
            }}
          />
          <label>50% and above</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
