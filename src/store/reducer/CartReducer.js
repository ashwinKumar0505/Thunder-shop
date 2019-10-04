import * as actionTypes from "../action/CartActionTypes";

const initialState = {
  items: [],
};

const CartReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.STORE_THE_ITEM:
      return {
        items: [...state.items, action.itemDetails],
      };
    case actionTypes.DELETE_THE_ITEM:
      console.log("deleteee");
      console.log(action.index);
      const newItems = state.items.slice(action.index, 1);
      return {
        items: newItems,
      };

    default:
      return state;
  }
};

export default CartReducer;
