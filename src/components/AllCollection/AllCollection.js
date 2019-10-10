import React, { Component } from "react";
import { connect } from "react-redux";

import { gettingAllDetails } from "../../store/action/ActionCreators";
import SearchField from "../SearchField/SearchField";
import Filter from "../Filter/Filter";
import Dress from "../Dress/Dress";
import Modal from "../Modal/Modal";

import classes from "./AllCollection.module.css";
class AllCollection extends Component {
  componentDidMount() {
    this.props.gettingAllDetails(this.props.page);
  }
  componentDidUpdate() {
    window.addEventListener("scroll", this.handleScroll);
    return () => window.removeEventListener("scroll", this.handleScroll);
  }
  state = {
    filterBrands: [],
    initialPrice: 0,
    finalPrice: 9999,
    discount: 0,
    price: [
      {
        present: false,
        initial: 299,
        final: 2897,
      },
      {
        present: false,
        initial: 2897,
        final: 5495,
      },
      {
        present: false,
        initial: 5495,
        final: 8093,
      },
    ],
    discountArray: [],
    selectedOption: "option0",
    productToBeSearched: null,
    loadMore: true,
    showModal: false
  };
  filteringItems = event => {
    const brandName = event.target.name;
    if (event.target.checked) {
      this.setState({
        filterBrands: [...this.state.filterBrands, brandName],
        loadMore: false,
      });
    } else {
      const index = this.state.filterBrands.indexOf(brandName);
      const newFilterBrands = [this.state.filterBrands];
      newFilterBrands.splice(index, 1);
      this.setState({
        filterBrands: newFilterBrands,
        loadMore: true,
      });
    }
  };
  setPriceRange = (event, initial, final, index) => {
    const indexValue = index;
    if (event.target.checked) {
      this.state.price[indexValue].present = true;
      this.setState({
        loadMore: false,
      });
    } else {
      this.state.price[indexValue].present = false;
      this.setState({
        loadMore: true,
      });
    }

    let initialAmount = 0;
    let finalAmount = 9999;
    let count = 1;
    this.state.price.map(price => {
      if (price.present) {
        if (count === 1) {
          initialAmount = price.initial;
          count = count + 1;
        }
        finalAmount = price.final;
      }
    });

    this.setState({
      initialPrice: initialAmount,
      finalPrice: finalAmount,
    });
  };

  setDiscountRange = (event, discount) => {
    this.setState({
      selectedOption: event.target.value,
      discount: discount,
    });
  };
 
  clearFilters=()=>{
      this.state.price[0].present = false;
      this.state.price[1].present = false;
      this.state.price[2].present = false;
    this.setState({
      filterBrands:[],
      selectedOption:"option0",
      discount:0,
      loadMore:true
    })
  }
 
  handleScroll = () => {
    if (this.state.loadMore) {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      else {
        this.props.gettingAllDetails(this.props.page);
        return;
      }
    } else {
      return;
    }
  };

  searchProduct = event => {
    if (event.target.value) {
      this.setState({
        loadMore: false,
      });
    } else {
      this.setState({
        loadMore: true,
      });
    }
    this.setState({
      productToBeSearched: event.target.value,
    });
  };

  changeModalState = () => {
    console.log("here");
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <div className={classes.AllCollection} style={{ overflow: "auto" }}>
        <Modal
          show={this.state.showModal}
          changeModalState={this.changeModalState}
          details={this.props.details}
          fetched={this.props.fetched}
          filteringItems={this.filteringItems}
          setPriceRange={this.setPriceRange}
          setDiscountRange={this.setDiscountRange}
          selectedOption={this.state.selectedOption}
          clearFilters={this.clearFilters}
          filterBrands={this.state.filterBrands}
          price={this.state.price}
        />
        <div className={classes.SearchDiv}>
          <p
            style={{
              fontSize: "1.2em",
              alignSelf: "center",
              fontWeight: "900",
              letterSpacing: "5px",
            }}
          >
            ALL COLLECTION
          </p>
          <br></br>
          <button className={classes.filterButton} onClick={this.changeModalState}>
            Click Here For Filters
          </button>
          <br></br>
          <SearchField searchProduct={this.searchProduct} />
        </div>
        <div className={classes.Products}>
          <div className={classes.Filters}>
            <Filter
              details={this.props.details}
              fetched={this.props.fetched}
              filteringItems={this.filteringItems}
              setPriceRange={this.setPriceRange}
              setDiscountRange={this.setDiscountRange}
              selectedOption={this.state.selectedOption}
            />
          </div>
          <div className={classes.Dresses}>
            <Dress
              details={this.props.details}
              fetched={this.props.fetched}
              filterBrands={this.state.filterBrands}
              initialPrice={this.state.initialPrice}
              finalPrice={this.state.finalPrice}
              discount={this.state.discount}
              productToBeSearched={this.state.productToBeSearched}
              loadMore={this.state.loadMore}
            />
          </div>
        </div>
      </div>
    );
  }
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
    gettingAllDetails: page => dispatch(gettingAllDetails(page)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllCollection);
