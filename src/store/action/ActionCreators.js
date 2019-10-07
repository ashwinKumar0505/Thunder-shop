import * as actionTypes from "./StoreActionTypes";
import axios from "axios";


export const gettingAllDetails= (page) =>{
    return dispatch => {
      axios
        .get("https://fresh-rope-219511.appspot.com/?page="+page)
        .then(Response => {
          dispatch(storingAllDetails(Response.data));
        })
        .catch(error => {
          return error;
        });
    };
}
export const storingAllDetails=data=>{
  return {
    type:actionTypes.STORING_ALL_DETAILS,
    data:data
  }
}

export const gettingMenDetails = (page) => {
    return dispatch => {
      axios
        .get("https://fresh-rope-219511.appspot.com/?page="+page+"&&gender=men")
        .then(Response => {
          dispatch(storingMenDetails(Response.data));
        })
        .catch(error => {
          return error;
        });
    };
}
export const storingMenDetails = data => {
  return {
    type: actionTypes.STORING_MEN_DETAILS,
    data: data,
  };
};

export const gettingWomenDetails = (page) => {
    return dispatch => {
      axios
        .get("https://fresh-rope-219511.appspot.com/?page="+page+"&&gender=women")
        .then(Response => {
          dispatch(storingWomenDetails(Response.data));
        })
        .catch(error => {
          return error;
        });
    };
  } 


export const storingWomenDetails = data => {
  return {
    type: actionTypes.STORING_WOMEN_DETAILS,
    data: data,
  };
};

