import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for login
    console.log('Login with', { email, password });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Sign-in to Your Account</h2>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="error-message">Please enter a valid email address</p>

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <p className="error-message">
          Must be between 6-16 characters
        </p>

        <button type="submit" className="auth-button">Sign In</button>

        <p>
          By clicking on Sign In you also agree to our{' '}
          <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
        </p>

        <div className="social-signin">
          <button>Sign in with Apple</button>
          <button>Sign in with Facebook</button>
          <button>Sign in with Google</button>
        </div>

        <div className="links">
          <Link to="/forgot-password">Forgot your password?</Link>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
