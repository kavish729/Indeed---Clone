import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyReview from "../pages/CompanyReview";
import SalaryGuide from "../pages/SalaryGuide";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/companyreview" element={<CompanyReview/>} />
        <Route path="/salaryguide" element={<SalaryGuide/>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
