import axios from "axios";
import React, { useState } from "react";

const useSearchjob = (url) => {
  [data, setData] = useState([]);
  axios.get(url).then((response) => {
    setData(response.data);
  });

  return data;
};

export default useSearchjob;
