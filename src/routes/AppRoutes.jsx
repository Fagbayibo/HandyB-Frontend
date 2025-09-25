import React from "react";
import {Route, Routes} from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Login from "../auth/Login";
import Home from "../pages/public/Home";
import SignUp from "../auth/SignUp";
import EmailOtpPage from "../auth/EmailOtpPage";
import SmsOtpPage from '../auth/SmsOtpPage';
import VerificationPage from "../auth/verification";
import ResetPasswordPage from "../auth/ResetPassword";
import ForgotPasswordPage from "../auth/ForgotPassword";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/email-otp" element={<EmailOtpPage />} />
      <Route path="/sms-otp" element={<SmsOtpPage />} />
      <Route path="/verify" element={<VerificationPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/dashboard-home" element={<DashboardHome />} />


      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardHome />
          </ProtectedRoute>
        }
      />

      {/* Errror 404 fallback */}
      <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
  );
};

export default AppRoutes;
