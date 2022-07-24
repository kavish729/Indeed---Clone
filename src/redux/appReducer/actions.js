import {
  GET_COMPANY_REQUESET,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAILURE,
  GET_JOBS_REQUESET,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAILURE,
  GET_SINGLE_JOBS_REQUESET,
  GET_SINGLE_JOBS_SUCCESS,
  GET_SINGLE_JOBS_FAILURE,
} from "./actionType";
import axios from 'axios';

export const getcompanyApi = () => (dispatch) => {
    dispatch({type:GET_COMPANY_REQUESET});
    axios
    .get('https://indeeddatabase.herokuapp.com/companies')
    .then((response) => {
        console.log(response.data);
        dispatch({type:GET_COMPANY_SUCCESS,payload:response.data});
      })
  .catch((error) => {
      dispatch({type:GET_COMPANY_FAILURE});
  });
};

export const getJobs = () => (dispatch) => {
  dispatch({type:GET_JOBS_REQUESET});
  axios.get('https://indeeddatabase.herokuapp.com/jobs')
  .then((response) => {
      dispatch({type:GET_JOBS_SUCCESS,payload:response.data});
    })
.catch((error) => {
    dispatch({type:GET_JOBS_FAILURE});
});
};

export const getSingleJobs = (id) => (dispatch) => {
  dispatch({type:GET_SINGLE_JOBS_REQUESET});
  axios.get(`https://indeeddatabase.herokuapp.com/jobs/${id}`)
  .then((response) => {
      dispatch({type:GET_SINGLE_JOBS_SUCCESS,payload:response.data});
    })
.catch((error) => {
    dispatch({type:GET_SINGLE_JOBS_FAILURE});
});
};