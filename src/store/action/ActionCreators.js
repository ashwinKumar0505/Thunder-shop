import * as actionTypes from "./ActionTypes";
import axios from "axios";

export const gettingMenDetails = showMore => {
  if (showMore) {
    return dispatch => {
      axios
        .get("https://fresh-rope-219511.appspot.com/?gender=men")
        .then(Response => {
          dispatch(storingMenDetails(Response.data));
        })
        .catch(error => {
          return error;
        });
    };
  } else {
    return { type: actionTypes.DONT_STORE };
  }
};

export const storingMenDetails = data => {
  return {
    type: actionTypes.STORING_MEN_DETAILS,
    data: data,
  };
};

export const gettingWomenDetails = () => {
  return dispatch => {
    axios
      .get("https://fresh-rope-219511.appspot.com/?gender=women")
      .then(Response => {
        dispatch(storingWomenDetails(Response.data));
      })
      .catch(error => {
        return error;
      });
  };
};

export const storingWomenDetails = data => {
  return {
    type: actionTypes.STORING_WOMEN_DETAILS,
    data: data,
  };
};
export const loadMore=()=>{
  return {
    type:actionTypes.LOAD_MORE
  }
}
