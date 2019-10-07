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
      const newItems = state.items.slice(action.index, 1);
      return {
        ...state,
        items: newItems,
        disable:false
      };

    default:
      return state;
  }
};

export default CartReducer;
