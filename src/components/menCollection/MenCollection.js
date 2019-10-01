import React, { useEffect } from "react";
import { connect } from "react-redux";

import { gettingMenDetails } from "../../store/action/ActionCreators";
import classes from "./MenCollection.module.css";
import SortBy from "../sortBy/SortBy";
import SearchField from "../SearchField/SearchField";
import Filter from "../Filter/Filter";
import Dress from "../Dress/Dress"
const MenCollection = props => {
  useEffect(() => {
    props.gettingMenDetails(props.showMore);
  }, [props]);
  console.log(props.men);
  return (
    <div className={classes.MenCollection}>
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
        <div className={classes.Dresses}></div>
        <Dress />
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
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenCollection);