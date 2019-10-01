import React from 'react';
import Header from "../Header/Header"
import ChooseGender from "../ChooseGender/ChooseGender"
import classes from './HomePage.module.css';
import MenCollection from "../menCollection/MenCollection"
const HomePage=()=>{
  return (
    <div className={classes.HomePage}>
      <Header />
      {/* <ChooseGender /> */}
      <MenCollection />
    </div>
  )
}

export default HomePage