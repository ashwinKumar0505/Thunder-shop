import * as actionTypes from "../action/CartActionTypes"

const initialState={
  items:[]
}

const CartReducer=(state=initialState,action)=>{
  switch(action.type)
  {
    case (actionTypes.STORE_THE_ITEM):{
      return {
        items:[...state.items,action.itemDetails]
      }
    }
    default:return state;
  }
}

export default CartReducer;