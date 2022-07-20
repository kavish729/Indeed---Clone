import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyReview from "../pages/CompanyReview";
import Findjobs from "../pages/Findjobs";

import SalaryGuide from "../pages/SalaryGuide";

import { HelpCenter } from "../pages/HelpCenter";

const MainRoutes = () => {
  return (
    <>
      <Routes>

      <Route path="/" element={<Findjobs/>} />
   


      
       <Route path="/salaryguide" element={<SalaryGuide/>} />

        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/companyreview" element={<CompanyReview />} />
       


      </Routes>
    </>
  );
};

export default MainRoutes;
