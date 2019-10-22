import React from "react";
import FiltersModal from "../FiltersModal/FiltersModal";
import classes from "./Modal.module.css";

const Modal = props => {
  return (
    <div
      className={classes.Modal}
      style={{ display: props.show ? "block" : "none" }}
    >
      <FiltersModal
        changeModalState={props.changeModalState}
        details={props.details}
        fetched={props.fetched}
        filteringItems={props.filteringItems}
        setPriceRange={props.setPriceRange}
        setDiscountRange={props.setDiscountRange}
        selectedOption={props.selectedOption}
        clearFilters={props.clearFilters}
        filterBrands={props.filterBrands}
        price={props.price}
      />
    </div>
  );
};
export default Modal;
