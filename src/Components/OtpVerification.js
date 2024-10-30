// OtpVerification.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Use location to access email
import Swal from 'sweetalert2'; // For alerts

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const location = useLocation(); // Get email from location state
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();

    // Simulate OTP verification (In real apps, verify with the backend)
    if (otp === '123456') { // Example OTP validation
      Swal.fire({
        icon: 'success',
        title: 'OTP Verified!',
        text: 'You can now reset your password.',
      }).then(() => {
        navigate('/reset-password', { state: { email: location.state.email } }); // Navigate to Reset Password page
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid OTP',
        text: 'Please enter the correct OTP.',
      });
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleVerify} className="auth-form">
        <h2>Enter OTP</h2>
        <label>OTP</label>
        <input
          type="text"
          placeholder="Enter the OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">Verify OTP</button>
      </form>
    </div>
  );
};

export default OtpVerification;
