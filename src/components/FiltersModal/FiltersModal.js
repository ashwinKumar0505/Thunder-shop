import React, { useState } from "react";
import classes from "./FiltersModal.module.css";
import Spinner2 from "../Spinner2/Spinner2";

const FilterModal = props => {
  const array = [];
  const [filtersToShow, setFiltersToShow] = useState("brands");
  let filtersToRender = null;
  const setFilter=(type)=>{
    setFiltersToShow(type)
  }
  if (filtersToShow === "brands") {
    filtersToRender = (
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
                    checked={props.filterBrands.includes(data)}
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
    );
  } else if (filtersToShow === "prices") {
    filtersToRender = (
      <div className={classes.Prices}>
        <div className={classes.EachPrice}>
          <input
            type="checkbox"
            className={classes.CheckBox}
            checked={props.price[0].present}
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
            checked={props.price[1].present}
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
            checked={props.price[2].present}
            onChange={event => {
              props.setPriceRange(event, 5495, 8093, 2);
            }}
          />
          <label>Rs.5495 to 8093</label>
        </div>
      </div>
    );
  } else {
    filtersToRender = (
      <div className={classes.discount}>
        <div className={classes.Discount}>
          <input
            type="radio"
            className={classes.CheckBox}
            value="option0"
            checked={props.selectedOption === "option0"}
            onChange={event => {
              props.setDiscountRange(event, 0);
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
    );
  }
  return (
    <div>
      <div className={classes.Header}>
        <div>
          <span
            style={{
              marginRight: "30px",
              fontWeight: "800",
              cursor: "pointer",
            }}
            onClick={props.changeModalState}
          >
            &#x21e0;
          </span>
          <span>Filters</span>
        </div>
        <div>
          <span onClick={props.clearFilters}>Clear Filters</span>
        </div>
      </div>
      <div className={classes.Filters}>
        <div className={classes.TypeOfFilter}>
          <p onClick={()=>setFilter("brands")} style={{backgroundColor: filtersToShow==="brands" ? "white" : "#bebaba"}}>Brands</p>
          <p onClick={()=>setFilter("prices")} style={{backgroundColor: filtersToShow==="prices" ? "white" : "#bebaba"}}>Prices</p>
          <p onClick={()=>setFilter("discounts")} style={{backgroundColor: filtersToShow==="discounts" ? "white" : "#bebaba"}}>Discounts</p>
        </div>
        <div className={classes.FilterOptions}>
          {filtersToRender}
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
