import React from "react";
import Navbar from "../Navbar.jsx";
import "./Login.css";
import loginImage from "../../assets/children.webp"; // Replace with your actual image

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-container">
        {/* Left Side - Image */}
        <div className="login-image">
          <img src={loginImage} alt="Children Learning" />
        </div>

        {/* Right Side - Login Form */}
        <div className="login-form card p-4 shadow-lg">
          <h3 className="text-center mb-3">Login To Your Account</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" required />
            </div>
            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>
          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none">Forgot Password?</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
