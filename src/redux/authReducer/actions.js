import * as types from './actionType';
import axios from 'axios';

const register = (payload) => (dispatch) => {
  console.log('payload:', payload);

  dispatch({ type: types.REGISTER_REQUEST });

  return axios
    .post('https://authentication-aru.herokuapp.com/register', payload)
    .then((r) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
      return types.REGISTER_SUCCESS;
    })
    .catch((err) => {
      dispatch({ types: types.REGISTER_FAILURE, payload: err });
      return types.REGISTER_FAILURE;
    });
};

const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });

  return axios
    .post('https://authentication-aru.herokuapp.com/login', params)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
      return types.LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: err });
      return types.LOGIN_FAILURE;
    });
};

const logout=()=>(dispatch)=>{
dispatch({ type: types.LOGOUT_REQUEST });
}
export { register, login, logout };
