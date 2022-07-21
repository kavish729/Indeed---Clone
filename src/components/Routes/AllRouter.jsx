import React from 'react'
import {Routes,Route} from "react-router-dom"
import CompanyReview from '../../pages/CompanyReview'
import Findjobs from '../../pages/Findjobs'
import Profile from '../../pages/Profile'
import SalaryGuide from '../../pages/SalaryGuide'
import Signin from '../SignIn/Signin'
import Signup from '../Sign_up/Signup'
import Message from "../../pages/Message"
import Notification from "../../pages/Notification"
import { HelpCenter } from '../../pages/HelpCenter'
import EmployersPostJob from '../../pages/EmployersPostJob'
const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Findjobs />} />
      <Route path="/companies" element={<CompanyReview />} />
      <Route path="/salary" element={<SalaryGuide />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/message" element={<Message />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/postjobs" element={<EmployersPostJob />} />
      <Route path="/help" element={<HelpCenter />} />
    </Routes>
  );
}

export default AllRouter