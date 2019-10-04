import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import { gettingMenDetails, loadMore } from "../../store/action/ActionCreators";
import classes from "./MenCollection.module.css";
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
    props.gettingMenDetails(props.showMore,props.page);
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
      <div className={classes.Products} >
        <div className={classes.Filters} >
          <Filter details={props.men} fetched={ props.fetched }/>
        </div>
        <div className={classes.Dresses} >
          <Dress details={props.men} fetched={ props.fetched } />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    men: state.Reducer.men,
    showMore: state.Reducer.showMore,
    fetched:state.Reducer.fetched,
    page:state.Reducer.page
  };
};
const mapDispatchToProps = dispatch => {
  return {
    gettingMenDetails: (showMore,page) => dispatch(gettingMenDetails(showMore,page)),
    loadMore: () => dispatch(loadMore()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenCollection);
