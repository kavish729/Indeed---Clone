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
  

const initState={
    isLoading:false,
    isError:false,
    data:[],
    jobs:[],
    single:[]
}

export const appReducer=(state=initState,{type,payload})=>{
    switch(type){
    case GET_COMPANY_REQUESET:return{...state,isLoading:true,isError:false}
    case GET_COMPANY_SUCCESS :return{...state,isLoading:false,isError:false,data:payload}
    case GET_COMPANY_FAILURE :return{...state,isLoading:false,isError:true}
    case GET_JOBS_REQUESET:return{...state,isLoading:true,isError:false}
    case GET_JOBS_SUCCESS :return{...state,isLoading:false,isError:false,jobs:payload}
    case GET_JOBS_FAILURE :return{...state,isLoading:false,isError:true}
    case GET_SINGLE_JOBS_REQUESET:return{...state,isLoading:true,isError:false}
    case GET_SINGLE_JOBS_SUCCESS :return{...state,isLoading:false,isError:false,single:payload}
    case GET_SINGLE_JOBS_FAILURE :return{...state,isLoading:false,isError:true}
        default :return state;
    }
}
