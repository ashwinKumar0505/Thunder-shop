import * as actionTypes from "./CartActionTypes";

export const storeTheItem=(itemDetails)=>{
  console.log(itemDetails)
  return {
    type:actionTypes.STORE_THE_ITEM,
    itemDetails:itemDetails
  }
}
export const deleteTheItem=()=>{
  return {
    type:actionTypes.DELETE_THE_ITEM
  }
}