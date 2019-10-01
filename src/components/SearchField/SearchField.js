import React from 'react';
import classes from './SearchField.module.css';

const SearchField=()=>{
  return (
    <div className={classes.SearchField}>
      <div className={classes.searchIcon}>
     <i class="fa fa-search" ></i>
     </div>
    <input type="text" className={classes.search} placeholder="Search for products,brands and more"/>
    </div>
  )
}

export default SearchField