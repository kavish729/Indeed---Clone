import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyReview from "../pages/CompanyReview";
import { HelpCenter } from "../pages/HelpCenter";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HelpCenter />} />
        <Route path="/companyreview" element={<CompanyReview />} />
        {/* <Route path="/helpcenter" element={<HelpCenter />} /> */}
      </Routes>
    </>
  );
};

export default MainRoutes;
