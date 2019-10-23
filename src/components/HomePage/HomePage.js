import React,{ useState } from 'react';
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
import TopBrands from '../TopBrands/TopBrands';
const HomePage=()=>{
  const [color,setColor]=useState("white")
  const [textColor,setTextColor]=useState("black")
  const [checked,setChecked]=useState(false)
  const changeToDarkMode=(event)=>{
   if(event.target.checked){
     setColor("black");
     setTextColor("white")
     setChecked(true)
   }
   else{
     setColor("white");
     setTextColor("black")
     setChecked(false)
   }
  }
  return (
    <div className={classes.HomePage} >
      <Header color={color==="white" ? "bisque" : "black"} textColor={textColor}/>
      <div style={{backgroundColor:color,color:textColor}} className={classes.toRender}>
      <Switch>
        <Route path="/all-collection" render={()=><AllCollection changeToDarkMode={changeToDarkMode} checked={checked}/>}/>
        <Route path="/men-collection" render={()=><MenCollection changeToDarkMode={changeToDarkMode} checked={checked}/>} />
        <Route path="/women-collection" render={()=><WomenCollection changeToDarkMode={changeToDarkMode} checked={checked}/>} />
        <Route path="/each-product" component={EachProduct} />
        <Route path="/my-cart" component={MyCart} /> 
        <Route path="/wish-list" component={WishList} />
        <Route path="/top-brands"  component={TopBrands} />
        <Route path="/" component={ChooseGender} />
      </Switch>
      </div>
     </div>
  )
}

export default HomePage