import * as actionTypes from "../action/StoreActionTypes";
const initialState = {
  page:1,
  details: [],
  men: [],
  women: [],
  fetched: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORING_ALL_DETAILS:
      return {
        ...state,
        details: [...state.details, action.data],
        fetched: true,
        page:state.page+1
      };

    case actionTypes.STORING_MEN_DETAILS:
      return {
        ...state,
        men: [...state.men, action.data],
        fetched: true,
        page:state.page+1
      };
    case actionTypes.STORING_WOMEN_DETAILS:
      return {
        ...state,
        women: [...state.women, action.data],
        fetched: true,
        page:state.page+1
      };

    default:
      return state;
  }
};

export default Reducer;
