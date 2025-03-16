import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for carousel
// import "./Login.css"; // Custom styles
import Navbar from "./Navbar.jsx";
import slide1 from "../assets/slide1.avif"; 
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

const Signup = () => {
  return (
    <>
    <Navbar />
    <div className="container-fluid bg-black py-5">
      <div className="container bg-white p-4 rounded shadow-lg w-75 mx-auto">
        <div className="row align-items-center">
          {/* Left Side - Carousel Slideshow */}
          <div className="col-md-6">
            <div id="loginCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slide1} className="d-block w-100 rounded" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src={slide2} className="d-block w-100 rounded" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img src={slide3} className="d-block w-100 rounded" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                  <img src={slide4} className="d-block w-100 rounded" alt="Slide 4" />
                </div>
              </div>
                  {/* Carousel Controls */}
                  <button className="carousel-control-prev" type="button" data-bs-target="#signupCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#signupCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
  
              {/* Right Side - Sign Up Form */}
              <div className="col-md-6">
                <h3 className="fw-bold text-center">Sign Up</h3>
  
                <form className="mt-3">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name *"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name *"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Create Password *"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100">Sign Up</button>
                </form>
  
                {/* OR Divider */}
                <div className="text-center my-3">
                  <hr className="w-50 mx-auto" />
                  <span className="fw-bold text-muted">OR</span>
                  <hr className="w-50 mx-auto" />
                </div>
  
                {/* Google Sign Up Button */}
                <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    alt="Google"
                    className="me-2"
                    style={{ width: "20px" }}
                  />
                  Sign up with Google
                </button>
  
                {/* Login Link */}
                <p className="text-center mt-3">
                  Already have an account? <a href="/login" className="fw-bold">Log In</a>
                </p>
              </div>
  
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Signup;