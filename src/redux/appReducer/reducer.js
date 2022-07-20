import {
    GET_COMPANY_REQUESET,
    GET_COMPANY_SUCCESS,
    GET_COMPANY_FAILURE,
  } from "./actionType";
  

const initState={
    isLoading:false,
    isError:false,
    data:[],
}

export const appReducer=(state=initState,{type,payload})=>{

    switch(type){
    case GET_COMPANY_REQUESET:return{...state,isLoading:true,isError:false}
    case GET_COMPANY_SUCCESS :return{...state,isLoading:false,isError:false,data:payload}
    case GET_COMPANY_FAILURE :return{...state,isLoading:false,isError:true}


        default :return state;
    }
}