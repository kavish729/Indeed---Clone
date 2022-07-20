import React from 'react'
import {Routes,Route} from "react-router-dom"
import CompanyReview from '../../Pages/CompanyReview'
import FindJobs from '../../Pages/FindJobs'
import Profile from '../../Pages/Profile'
import SalaryGuide from '../../Pages/SalaryGuide'
import Signin from '../SignIn/Signin'
import Signup from '../Sign_up/Signup'

const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<FindJobs />} />
      <Route path="/companies" element={<CompanyReview />} />
      <Route path="/salary" element={<SalaryGuide />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default AllRouter