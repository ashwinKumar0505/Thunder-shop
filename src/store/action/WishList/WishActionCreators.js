import * as actionTypes from "./WishActionTypes"

export const storeInWishList=(product)=>{
  return {
    type:actionTypes.STORE_IN_WISHLIST,
    product:product
  }
}

export const removeFromWishList=(productId)=>{
  return {
    type:actionTypes.REMOVE_FROM_WISHLIST,
    productId:productId
  }
}