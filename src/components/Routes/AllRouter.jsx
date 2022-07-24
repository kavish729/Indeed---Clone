
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
import EmployerQuestions from '../../pages/EmployerQuestions'
import CompanyLandingPage from '../../pages/CompanyLandingPage'
import Snapshot from '../CompanyLandingPage/Tabs/Snapshot'
import WhyUS from '../CompanyLandingPage/Tabs/WhyUS'
import Reviews from '../CompanyLandingPage/Tabs/Reviews'
import Jobs from '../CompanyLandingPage/Tabs/Jobs'
import Questions from '../CompanyLandingPage/Tabs/Questions'
import Interviews from '../CompanyLandingPage/Tabs/Interviews'
import Photos from '../CompanyLandingPage/Tabs/Photos'
import Salaries from '../CompanyLandingPage/Tabs/Salaries'
import ReqAuth from '../ReqAuth/ReqAuth'
import CompareCompanies from '../../pages/CompareCompanies'
import ApplyJobs from '../FindJobs/ApplyJobs'


const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Findjobs />} />
      <Route path='/applyjobs' element={<ApplyJobs/>}/>
      <Route path="/companies" element={<CompanyReview />} />
      <Route path="/salary" element={<SalaryGuide />} />
      <Route
        path="/profile"
        element={
          <ReqAuth>
            <Profile />
          </ReqAuth>
        }
      />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/message"
        element={
          <ReqAuth>
            <Message />
          </ReqAuth>
        }
      />
      <Route
        path="/notification"
        element={
          <ReqAuth>
            <Notification />
          </ReqAuth>
        }
      />
      <Route path="/postjobs" element={<EmployersPostJob />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path='/employerquestions' element={<EmployerQuestions/>}/>
      <Route path='/comparecompanies' element={<CompareCompanies/>}/>
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
};

export default AllRouter;
