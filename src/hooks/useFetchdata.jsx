import React, { useEffect } from "react";
import axios from "axios";
const useFetchdata = (url,dispatch,loading,success,error) => {
  const [data, setData] = React.useState([]);
 

  useEffect(() =>{
    dispatch({type:loading});
      axios
      .get(url)
      .then((response) => {
          setData(response.data);
          dispatch({type:success,payload:response.data});
        })
    .catch((error) => {
        dispatch({type:error});
    });
},[url,dispatch,success,error])

  return console.log(data);
};

export default useFetchdata;
