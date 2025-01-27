
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
// import Swal from "sweetalert2"; // Import SweetAlert2
// import "./auth.css";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { email, password, confirmPassword } = formData;

//     // Validate if passwords match
//     if (password !== confirmPassword) {
//       // SweetAlert for password mismatch
//       Swal.fire({
//         icon: "error",
//         title: "Passwords do not match",
//         text: "Please ensure both passwords are the same.",
//       });
//       return;
//     }

//     // Simulate successful signup
//     Swal.fire({
//       icon: "success",
//       title: "Account Created!",
//       text: "Your account has been created successfully.",
//       confirmButtonText: "Proceed to Login",
//     }).then(() => {
//       // Redirect to login page after confirmation
//       navigate("/login");
//     });

//     console.log("Signup with", formData); // Log form data
//   };

//   return (
//     <div className="auth-container">
//       <form onSubmit={handleSubmit} className="auth-form">
//         <h2>Create Your Account</h2>

//         <label>Email Address</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Create a password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           minLength={6}
//         />

//         <label>Confirm Password</label>
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm your password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit" className="auth-button">
//           Sign Up
//         </button>

//         <p>
//           Already have an account? <Link to="/login">Sign In</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Swal from "sweetalert2"; // Import SweetAlert2
import "./auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    // Validate if passwords match
    if (password !== confirmPassword) {
      // SweetAlert for password mismatch
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please ensure both passwords are the same.",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        // Simulate successful signup
        Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: "Your account has been created successfully.",
          confirmButtonText: "Proceed to Login",
        }).then(() => {
          // Redirect to login page after confirmation
          navigate("/login");
        });
      } else {
        // Handle unsuccessful registration
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: errorData.message || "An error occurred during registration.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Unable to connect to the server. Please try again later.",
      });
      console.error("Error:", error);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Create Your Account</h2>

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="auth-button">
          Sign Up
        </button>

        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
