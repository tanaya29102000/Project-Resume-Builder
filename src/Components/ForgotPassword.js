
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // For making HTTP requests
import Swal from 'sweetalert2'; // For alerts

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send OTP to the email using backend API
      await axios.post('http://localhost:5000/send-otp', { email });

      // Alert user about OTP sent and navigate to OTP page
      Swal.fire({
        icon: 'success',
        title: 'OTP Sent!',
        text: 'Check your email for the OTP.',
        confirmButtonText: 'Proceed',
      }).then(() => {
        navigate('/otp-verification', { state: { email } }); // Pass email to the OTP page
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send OTP. Try again.',
      });
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Reset Your Password</h2>
        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
