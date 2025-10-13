import React from "react";
// use react-router-dom for DOM apps
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// Public pages
import Home from "../pages/public/Home";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";

// Auth / account flows
import EmailOtpPage from "../auth/EmailOtpPage";
import SmsOtpPage from "../auth/SmsOtpPage";
import VerificationPage from "../auth/Verification";
import ResetPasswordPage from "../auth/ResetPassword";
import ForgotPasswordPage from "../auth/ForgotPassword";

// Dashboard & features
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Services from "../pages/dashboard/Services";
import Bookings from "../pages/dashboard/Bookings";
import Chats from "../pages/dashboard/Chats";
import Payments from "../pages/dashboard/Payments";

// Booking detail page (by id)
import BookService from "../pages/dashboard/BookService";
import BookingPayment from "../pages/dashboard/BookingPayment";
import BookingDetails from "../pages/dashboard/BookingDetails";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ---------------------- Public Routes ---------------------- */}
      <Route path="/" element={<Home />} />

      {/* ---------------------- Auth / Account Routes ---------------------- */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/email-otp" element={<EmailOtpPage />} />
      <Route path="/sms-otp" element={<SmsOtpPage />} />
      <Route path="/verify" element={<VerificationPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* quick access */}
      <Route path="/dashboard-home" element={<DashboardHome />} />

      {/* ---------------------- Protected Dashboard (nested) ---------------------- */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardHome />} />
        <Route path="services" element={<Services />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="chat" element={<Chats />} />
        <Route path="payment" element={<Payments />} />

        {/* Booking detail nested so it uses DashboardLayout (sidebar) */}
        <Route path="service-booking/:id" element={<BookService />} />
        <Route path="booking/:id/details" element={<BookingDetails/>}/>
      </Route>

      {/* Booking Payment */}
      <Route
        path="booking/:id/payment"
        element={
          <ProtectedRoute>
            <BookingPayment />
          </ProtectedRoute>
        }
      />

      {/* ---------------------- Fallback ---------------------- */}
      <Route path="*" element={<p>Page Not Found</p>} />
    </Routes>
  );
};

export default AppRoutes;
