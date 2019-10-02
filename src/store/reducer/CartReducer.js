import * as actionTypes from "../action/CartActionTypes"

const initialState={
  items:[]
}

const CartReducer=(state=initialState,action)=>{
  switch(action.type)
  {
    default:return state;
  }
}

export default CartReducer;