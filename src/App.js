import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Resume from "./Components/Resume";
import ForgotPassword from "./Components/ForgotPassword";
import OtpVerification from "./Components/OtpVerification";
// import ResetPassword from './components/ResetPassword'; // Optional: Reset Password page

function App() {
  const location = useLocation(); // Get the current route path

  // Hide the Header on specific routes
  const hideHeaderRoutes = ["/login", "/signup", "/resume"];

  return (
    <>
      {/* Conditionally render Header based on the current path */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
      </Routes>
    </>
  );
}

export default App;
