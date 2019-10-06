import React, { Component } from "react";
import { connect } from "react-redux";

import { gettingAllDetails } from "../../store/action/ActionCreators";
import classes from "./AllCollection.module.css";
import SearchField from "../SearchField/SearchField";
import Filter from "../Filter/Filter";
import Dress from "../Dress/Dress";
class AllCollection extends Component {
  
  componentDidMount(){
   this.props.gettingAllDetails(this.props.page);
 
  }
  componentDidUpdate(){
   window.addEventListener("scroll", this.handleScroll);
    return () => window.removeEventListener("scroll", this.handleScroll);
 
  }
  
  handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    else {
      this.props.gettingAllDetails(this.props.page)
      return;
    }
  };
  
  render()
  {
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
          <Filter details={this.props.details} fetched={this.props.fetched} />
        </div>
        <div className={classes.Dresses}>
          <Dress details={this.props.details} fetched={this.props.fetched} />
        </div>
      </div>
    </div>
  );
};
}
const mapStateToProps = state => {
  return {
    details: state.Reducer.details,
    fetched: state.Reducer.fetched,
    page: state.Reducer.page,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    gettingAllDetails: ( page) =>
      dispatch(gettingAllDetails( page)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllCollection);
