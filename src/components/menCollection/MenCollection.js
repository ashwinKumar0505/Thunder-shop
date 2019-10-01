import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import { gettingMenDetails, loadMore } from "../../store/action/ActionCreators";
import classes from "./MenCollection.module.css";
import SortBy from "../sortBy/SortBy";
import SearchField from "../SearchField/SearchField";
import Filter from "../Filter/Filter";
import Dress from "../Dress/Dress";
const MenCollection = props => {
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    else{
    props.loadMore();
    return;
    }
  });
  useEffect(() => {
    props.gettingMenDetails(props.showMore);
  }, [handleScroll, props]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[handleScroll]);
  return (
    <div className={classes.MenCollection} style={{ overflow: "auto" }}>
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
        <SortBy />
      </div>
      <div className={classes.Products}>
        <div className={classes.Filters}>
          <Filter />
        </div>
        <div className={classes.Dresses}>
          <Dress />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    men: state.men,
    showMore: state.showMore,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    gettingMenDetails: showMore => dispatch(gettingMenDetails(showMore)),
    loadMore: () => dispatch(loadMore()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenCollection);
