import * as actionTypes from "./CartActionTypes";

export const storeTheItem=(itemDetails)=>{
  return {
    type:actionTypes.STORE_THE_ITEM,
    itemDetails:itemDetails
  }
}

export const deleteTheItem=(index)=>{
   return {
    type:actionTypes.DELETE_THE_ITEM,
    index:index
  }
}