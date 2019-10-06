import React, { Component } from "react";
import { connect } from "react-redux";

import {
  gettingWomenDetails
} from "../../store/action/ActionCreators";
import SearchField from "../SearchField/SearchField";
import Filter from "../Filter/Filter";
import Dress from "../Dress/Dress";
import classes from "./WomenCollection.module.css";
class WomenCollection extends Component {
  componentDidMount() {
    this.props.gettingWomenDetails(this.props.page);
  }

  componentDidUpdate() {
    window.addEventListener("scroll", this.handleScroll);
    return () => window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll=()=> {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    else {
      console.log( this.props.gettingWomenDetails(this.props.page))
    this.props.gettingWomenDetails(this.props.page);
    return;
    }
  }
  render() {
    return (
      <div className={classes.WomenCollection} style={{ overflow: "auto" }}>
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
            <Filter details={this.props.women} fetched={this.props.fetched} />
          </div>
          <div className={classes.Dresses}>
            <Dress details={this.props.women} fetched={this.props.fetched} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    women: state.Reducer.women,
    fetched: state.Reducer.fetched,
    page: state.Reducer.page,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    gettingWomenDetails: (page) =>
      dispatch(gettingWomenDetails(page)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WomenCollection);
