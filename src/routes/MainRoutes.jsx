import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyReview from "../pages/CompanyReview";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/companyreview" element={<CompanyReview/>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
