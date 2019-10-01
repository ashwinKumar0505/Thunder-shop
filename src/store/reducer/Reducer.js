import React from 'react';
import * as actionTypes from "../action/ActionTypes"
const initialState={
  men:[],
  women:[],
  fetched:false,
  showMore:true
}

const Reducer=(state=initialState,action)=>{
 switch(action.type)
 {
   case (actionTypes.STORING_MEN_DETAILS):
     return {
       ...state,
       men:[...state.men,action.data],
       fetched:true,
       showMore:false
     };
    case(actionTypes.STORING_WOMEN_DETAILS):
    return {
      ...state,
      women:[...state.women,action.data],
      fetched:true,
      showMore:false
    }
   default:return state;
 }
}
export default Reducer