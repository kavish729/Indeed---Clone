import {
  GET_COMPANY_REQUESET,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAILURE,
} from "./actionType";
import axios from 'axios';

export const getcompanyApi = () => (dispatch) => {
    dispatch({type:GET_COMPANY_REQUESET});
    axios
    .get('http://localhost:8080/companies')
    .then((response) => {
        console.log(response.data);
        dispatch({type:GET_COMPANY_SUCCESS,payload:response.data});
      })
  .catch((error) => {
      dispatch({type:GET_COMPANY_FAILURE});
  });
};
