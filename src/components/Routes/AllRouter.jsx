import React from 'react'
import {Routes,Route} from "react-router-dom"
import CompanyReview from '../../Pages/CompanyReview'
import Findjobs from '../../Pages/Findjobs'
import Profile from '../../Pages/Profile'
import SalaryGuide from '../../Pages/SalaryGuide'
import Signin from '../SignIn/Signin'
import Signup from '../Sign_up/Signup'
import Message from "../../Pages/Message"
import Notification from "../../Pages/Notification"
import { HelpCenter } from '../../Pages/HelpCenter'
import EmployersPostJob from '../../Pages/EmployersPostJob'
import EmployerQuestions from '../../Pages/EmployerQuestions'
import CompanyLandingPage from '../../Pages/CompanyLandingPage'
import Snapshot from '../CompanyLandingPage/Tabs/Snapshot'
import WhyUS from '../CompanyLandingPage/Tabs/WhyUS'
import Reviews from '../CompanyLandingPage/Tabs/Reviews'
import Jobs from '../CompanyLandingPage/Tabs/Jobs'
import Questions from '../CompanyLandingPage/Tabs/Questions'
import Interviews from '../CompanyLandingPage/Tabs/Interviews'
import Photos from '../CompanyLandingPage/Tabs/Photos'
import Salaries from '../CompanyLandingPage/Tabs/Salaries'
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
      <Route path='/employerquestions' element={<EmployerQuestions/>}/>
      <Route path='/companies/:id' element={<CompanyLandingPage/>} >  
             <Route path="shapshot" element={<Snapshot />} />
             <Route path="whyus" element={<WhyUS />} />
             <Route path="reviews" element={<Reviews />} />
             <Route path="salaries" element={<Salaries />} />
             <Route path="jobs" element={<Jobs />} />
             <Route path="questions" element={<Questions />} />
             <Route path="interviews" element={<Interviews />} />
             <Route path="photos" element={<Photos />} />
      </Route>
    </Routes>
  );
}

export default AllRouter