import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import { gettingWomenDetails, loadMore } from "../../store/action/ActionCreators";
import SearchField from "../SearchField/SearchField";
import Filter from "../Filter/Filter";
import Dress from "../Dress/Dress";
import classes from "./WomenCollection.module.css";
const WomenCollection = props => {
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
    props.gettingWomenDetails(props.showMore,props.page);
  }, [props]);

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
      </div>
      <div className={classes.Products}>
        <div className={classes.Filters}>
          <Filter details={props.women} fetched={props.fetched}/>
        </div>
        <div className={classes.Dresses}>
          <Dress details={props.women} fetched={props.fetched}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    women: state.Reducer.women,
    showMore: state.Reducer.showMore,
    fetched:state.Reducer.fetched,
    page:state.Reducer.page
  };
};
const mapDispatchToProps = dispatch => {
  return {
    gettingWomenDetails: (showMore,page) => dispatch(gettingWomenDetails(showMore,page)),
    loadMore: () => dispatch(loadMore()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WomenCollection);
