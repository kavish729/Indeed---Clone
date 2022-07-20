import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyReview from "../pages/CompanyReview";

import SalaryGuide from "../pages/SalaryGuide";

import { HelpCenter } from "../pages/HelpCenter";

const MainRoutes = () => {
  return (
    <>
      <Routes>

      
       <Route path="/salaryguide" element={<SalaryGuide/>} />

        <Route path="/" element={<HelpCenter />} />
        <Route path="/companyreview" element={<CompanyReview />} />
       

      </Routes>
    </>
  );
};

export default MainRoutes;
