import * as actionTypes from "../action/CartActionTypes";

const initialState = {
  items: [],
  disable: [],
};

const CartReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.STORE_THE_ITEM:
      return {
        ...state,
        items: [...state.items, action.itemDetails],
        disable:[...state.disable,action.itemDetails.productId]
      };
    case actionTypes.DELETE_THE_ITEM:
      console.log("deleteee");
      console.log(action.index);
      const newItems = state.items.filter((item,index)=>{
        if(index===action.index){
          return false
        }
        else{
          return item
        }
      })
      const newDisable=state.disable.filter((item,index)=>{
          if(index===action.index){
          return false
        }
        else{
          return item
        }
      })
      return {
        ...state,
        disable:newDisable,
        items:newItems
      };

    default:
      return state;
  }
};

export default CartReducer;
