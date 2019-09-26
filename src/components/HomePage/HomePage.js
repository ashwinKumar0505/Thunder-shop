import React from 'react';
import Header from "../Header/Header"
import ChooseGender from "../ChooseGender/ChooseGender"
import classes from './HomePage.module.css';
const HomePage=()=>{
  return (
    <div className={classes.HomePage}>
      <Header />
      <ChooseGender />
    </div>
  )
}

export default HomePage