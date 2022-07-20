import React from "react";
import { Routes, Route } from "react-router-dom";
import CompanyReview from "../pages/CompanyReview";
import Findjobs from "../pages/Findjobs";

const MainRoutes = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Findjobs/>} />
      <Route path="/companyreview" element={<CompanyReview/>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
