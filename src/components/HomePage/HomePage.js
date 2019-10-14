import React from 'react';
import {Route,Switch} from "react-router-dom"
import Header from "../Header/Header"
import ChooseGender from "../ChooseGender/ChooseGender"
import MenCollection from "../menCollection/MenCollection"
import MyCart from '../MyCart/MyCart';
import WomenCollection from '../WomenCollection/WomenCollection';
import AllCollection from "../AllCollection/AllCollection"
import WishList from '../WishList/WishList';
import EachProduct from "../EachProduct/EachProduct"
import classes from './HomePage.module.css';
const HomePage=()=>{
  return (
    <div className={classes.HomePage}>
      <Header />
      <Switch>
        <Route path="/all-collection" component={AllCollection} />
        <Route path="/men-collection" component={MenCollection} />
        <Route path="/women-collection" component={WomenCollection} />
        <Route path="/each-product" component={EachProduct} />
        <Route path="/my-cart" component={MyCart} /> 
        <Route path="/wish-list" component={WishList} />
        <Route path="/" component={ChooseGender} />
      </Switch>
     </div>
  )
}

export default HomePage