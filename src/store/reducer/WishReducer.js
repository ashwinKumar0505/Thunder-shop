import * as actionTypes from "../action/WishList/WishActionTypes"

const initialState={
  products:[],
  productId:[]
}

const WishReducer=(state=initialState,action)=>{
  switch (action.type){
    case (actionTypes.STORE_IN_WISHLIST):{
       return {
         ...state,
         products:[...state.products,action.product],
         productId:[...state.productId,action.product.productId]
       }
    }
    case (actionTypes.REMOVE_FROM_WISHLIST):{
      const newProductId=state.productId.filter(productId=>{
        return productId===action.productId ? null : productId
      })
      const newProduct=state.products.filter(product=>{
        return product.productId===action.productId ? null : product
      })
       return {
         ...state,
         products:newProduct,
         productId:newProductId,
       }
    }
    default : return state
  }
}

export default WishReducer;