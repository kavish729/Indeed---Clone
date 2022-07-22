import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getSingleJobs } from '../../redux/appReducer/actions';

const JobDetails = () => {
    const {id}=useParams();
const dispatch=useDispatch();
const details=useSelector(state=>state.appReducer);
console.log(details)
useEffect(()=>{
    if(id){
        dispatch(getSingleJobs(id))
    }
},[dispatch,id])
  return (
    <div>
      
    </div>
  )
}

export default JobDetails
