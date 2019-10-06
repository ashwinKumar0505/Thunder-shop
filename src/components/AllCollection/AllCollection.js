import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import { gettingAllDetails, loadMore } from "../../store/action/ActionCreators";
import classes from "./AllCollection.module.css";
import SearchField from "../SearchField/SearchField";
import Filter from "../Filter/Filter";
import Dress from "../Dress/Dress";
const AllCollection = props => {
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    else {
      props.loadMore();
      return;
    }
  });
  useEffect(() => {
    props.gettingAllDetails(props.showMore, props.page);
  }, [props]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div className={classes.AllCollection} style={{ overflow: "auto" }}>
      <div className={classes.SearchDiv}>
        <p
          style={{
            fontSize: "1.2em",
            alignSelf: "center",
            fontWeight: "900",
            letterSpacing: "5px",
          }}
        >
          FILTERS
        </p>
        <SearchField />
      </div>
      <div className={classes.Products}>
        <div className={classes.Filters}>
          <Filter details={props.details} fetched={props.fetched} />
        </div>
        <div className={classes.Dresses}>
          <Dress details={props.details} fetched={props.fetched} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    details: state.Reducer.details,
    showMore: state.Reducer.showMore,
    fetched: state.Reducer.fetched,
    page: state.Reducer.page,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    gettingAllDetails: (showMore, page) =>
      dispatch(gettingAllDetails(showMore, page)),
    loadMore: () => dispatch(loadMore()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllCollection);
