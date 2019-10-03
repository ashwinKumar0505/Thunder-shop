import React, { useState } from "react";
import { connect } from "react-redux";
import bag from "../../assets/empty_bag.gif";
import truck from "../../assets/truck1.png";
import {deleteTheItem} from "../../store/action/CartActionCreators"
import classes from "./MyCart.module.css";
const MyCart = props => {
  let total = 0;
  let crossedTotal = 0;
  let totalDiscount = 0;
  props.items.map(item => {
    total = total + item.price;
    crossedTotal = crossedTotal + item.crossedPrice;
    totalDiscount = totalDiscount + item.discount;
  });
  return props.items.length>0 ? (
    <div className={classes.cart}>
      <div className={classes.order}>
        <div className={classes.offers}>
          <p style={{ textAlign: "left", color: "#03a685", fontWeight: "800" }}>
            Offers
          </p>
          <ul style={{ listStyleType: "circle" }}>
            <li>
              10% Instant Discount on HDFC Bank Debit and Credit Cards on a min
              spend of Rs.5000.TCA
            </li>
            <li>
              20% Instant Discount on YES Bank Debit and Credit Cards on a min
              spend of Rs.6000.TCA
            </li>
          </ul>
        </div>
        <div className={classes.delivery}>
          <img src={truck} alt="truck icon" width="60px" height="30px" />
          <p>
            Yay! <span style={{ fontWeight: "800" }}>Free delivery</span> on
            this order
          </p>
        </div>
        <div className={classes.total}>
          <h5>My Shopping Bag({props.items.length})</h5>
          <h5>Total:&#8377;{total}</h5>
        </div>
        <div className={classes.items}>
          {props.items.map((item,index) => {
            return (
              <div className={classes.eachItem}>
                <img src={item.imagesArray[0]} alt="img" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div className={classes.description}>
                      <p>{item.title}</p>
                      <p style={{ fontWeight: "800" }}>{item.brandName}</p>
                      <p>
                        <span>Size: </span>
                        <select>
                          <option value="38">38</option>
                          <option value="39">39</option>
                          <option value="40">40</option>
                          <option value="42">42</option>
                        </select>
                        <span style={{ marginLeft: "10px" }}>Quantity:</span>
                        <select>
                          <option value="1">1</option>
                          <option value="1">2</option>
                          <option value="1">3</option>
                          <option value="1">4</option>
                          <option value="1">5</option>
                          <option value="1">6</option>
                          <option value="1">7</option>
                          <option value="1">8</option>
                          <option value="1">9</option>
                          <option value="1">10</option>
                        </select>
                      </p>
                    </div>
                    <div>
                      <p>
                        <span style={{ textDecoration: "line-through" }}>
                          &#8377;{item.crossedPrice}
                        </span>{" "}
                        <span style={{ marginLeft: "10px" }}>
                          &#8377;{item.price}
                        </span>
                      </p>
                      <p style={{ color: "#ef60b3" }}>({item.discount}% OFF)</p>
                    </div>
                  </div>
                  <div className={classes.RemoveAndMove}>
                    <button onClick={()=>deleteTheItem(index)}>Remove</button>
                    <button>Move To WishList</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.payment}>
        <p style={{ fontWeight: "600", color: "rgb(3, 166, 133)" }}>Options</p>
        <div className={classes.coupons}>
          <p style={{ fontWeight: "800" }}>Coupons</p>
          <button>APPLY</button>
        </div>
        <p style={{ margin: "10px 0" }}>
          Log In to use use account-linked coupons
        </p>
        <div className={classes.priceDetails}>
          <p style={{ fontWeight: "600", color: "rgb(3, 166, 133)" }}>
            Price Details
          </p>
          <div className={classes.price}>
            <div>
              <p>Bag Total</p>
              <p>Bag Discount</p>
              <p>Coupon Discount</p>
              <p>Order Total</p>
              <p>Delivery Charges</p>
            </div>
            <div>
              <p>&#8377;{crossedTotal}</p>
              <p>- &#8377;{totalDiscount}</p>
              <p style={{ color: "#ff3f6c", cursor: "pointer" }}>
                Apply Coupons
              </p>
              <p>&#8377;{total}</p>
              <p>FREE</p>
            </div>
          </div>
        </div>
        <div className={classes.totalAmount}>
          <p style={{ flex: "1" }}>Total</p>
          <p style={{ flex: "0 1 31%" }}>{total}</p>
        </div>
        <button className={classes.placeOrder}>PLACE ORDER</button>
      </div>
    </div>
  ) : (
    <div className={classes.MyCart}>
      <img src={bag} alt="bag" width="250px" height="250px" />
      <h2>Hey , It feels so light!</h2>
      <p style={{ color: "#7e818c", marginBottom: "10px" }}>
        there is nothing in your bag.Let's add some items
      </p>
      <button>Click Here To Browse</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    items: state.CartReducer.items,
  };
};
const mapDispatchToProps=dispatch=>{
  return {
    deleteTheItem:(index)=>dispatch(deleteTheItem(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyCart);
