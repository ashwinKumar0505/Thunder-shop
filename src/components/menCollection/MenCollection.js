import React, { Component } from "react";
import { connect } from "react-redux";

import { gettingMenDetails, loadMore } from "../../store/action/ActionCreators";
import classes from "./MenCollection.module.css";
import SearchField from "../SearchField/SearchField";
import Filter from "../Filter/Filter";
import Dress from "../Dress/Dress";

class MenCollection extends Component {
  componentDidMount() {
    console.log("mounted");
    this.props.gettingMenDetails(this.props.showMore, this.props.page);
  }
  componentDidUpdate() {
    console.log("here");
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
      this.props.loadMore();
      this.props.gettingMenDetails(this.props.showMore, this.props.page);
  
      return;
    }
  };
  render() {
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
            <Filter details={this.props.men} fetched={this.props.fetched} />
          </div>
          <div className={classes.Dresses}>
            <Dress details={this.props.men} fetched={this.props.fetched} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    men: state.Reducer.men,
    showMore: state.Reducer.showMore,
    fetched: state.Reducer.fetched,
    page: state.Reducer.page,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    gettingMenDetails: (showMore, page) =>
      dispatch(gettingMenDetails(showMore, page)),
    loadMore: () => dispatch(loadMore()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenCollection);
