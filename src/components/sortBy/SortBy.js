import React, { useState } from "react";
import classes from "./SortBy.module.css";

const SortBy = () => {
  const [type, setType] = useState([
    "What's New",
    "Popularity",
    "Better Discount",
    "Price:High to Low",
    "Price:Low to High",
  ]);

  const [showTypes, setShowTypes] = useState("none");
  const showTheTypes=()=>{
    setShowTypes("block")
  }
  const HideTheTypes=()=>[
    setShowTypes("none")
  ]
  return (
    <div>
      <div className={classes.SortByText} onMouseEnter={showTheTypes} onMouseLeave={HideTheTypes}>
        <p>
          Sort by:
          <span style={{ fontWeight: "600", padding: "0px 2px" }}>
            Recomended
          </span>
        </p>
        <p style={{ fontSize: "16px" }}>&dArr;</p>
      </div>
      <div style={{ display: showTypes }} className={classes.types} onMouseEnter={showTheTypes} onMouseLeave={HideTheTypes}>
        {type.map(type => {
          return <p>{type}</p>;
        })}
      </div>
    </div>
  );
};
export default SortBy;
