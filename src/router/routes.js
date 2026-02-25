import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BecomePartner from '../pages/BecomePartner';
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsAndConditions";


const AppRouter = () => {
    return (
      <Router basename="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/BecomePartner" element={<BecomePartner />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsCondition" element={<TermsCondition />} />
        </Routes>
      </Router>
    );
};

export default AppRouter;
