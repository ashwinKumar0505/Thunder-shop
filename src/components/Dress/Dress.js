import React,{useRef} from "react";
import { connect } from "react-redux";
import Spinner2 from "../Spinner2/Spinner2";
import {storeTheItem} from '../../store/action/CartActionCreators'

import classes from "./Dress.module.css";
const Dress = props => {

 const myRef=useRef(null)

  const showImages=(event,images)=>{
    console.log(images)
    console.log(myRef);
}
  return props.fetched ? (
    <div className={classes.Dresses}>
      {props.details.map(detail => {
        return detail.productsArray.map(product => {
          return (
            <div className={classes.EachDress} key={product.title} onMouseOver={(event)=>showImages(event,product.imagesArray)} >
              <img src={product.imagesArray[0]} alt="dress image" ref={myRef}/>
              <br></br>
              <p>{product.title}</p>
              <p style={{ fontWeight: "800" }}>{product.brandName}</p>
              <p>
                <span style={{ marginRight: "10px" }}>Rs.{product.price}</span>
                <span style={{ textDecoration: "line-through" }}>
                  Rs.{product.crossedPrice}
                </span>
              </p>
              <span style={{ color: "#f24e6b", marginBottom: "25px" }}>
                ({product.discount}% discount)
              </span>{" "}
              <button className={classes.CartButton} onClick={()=>props.storeTheItem(product)}>Add to cart</button>
            </div>
          );
        });
      })}
      {props.showMore ? (
        <div className={classes.spinner}>
          <Spinner2 />
        </div>
      ) : null}
    </div>
  ) : (
    <div className={classes.spinner}>
      <Spinner2 />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    showMore: state.Reducer.showMore,
  };
};
const mapDispatchToProps=dispatch=>{
  return {
      storeTheItem:(details)=>dispatch(storeTheItem(details))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dress);
