import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for carousel
// import "./Login.css"; // Custom styles
import Navbar from "../Navbar.jsx";
import slide1 from "../../assets/slide1.avif"; 
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import googlephoto from "../../assets/google.png";

const Login = () => {
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
              <button className="carousel-control-prev" type="button" data-bs-target="#loginCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#loginCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="col-md-6">
            <h3 className="fw-bold text-center">Login to Your Account</h3>

            <form className="mt-3">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">Login</button>
            </form>

            {/* OR Divider */}
            <div className="text-center my-3">
              <hr className="w-50 mx-auto" />
              <span className="fw-bold text-muted">OR</span>
              <hr className="w-50 mx-auto" />
            </div>

            {/* Google Login Button */}
            <button className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center">
              <img src= {googlephoto} alt="Google" className="me-2" style={{ width: "20px" }}/> Sign up with Google
            </button>

            {/* Sign Up Link */}
            <p className="text-center mt-3">
              Don’t have an account? <a href="/signup" className="fw-bold">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;


// import React from "react";
// import Navbar from "../Navbar.jsx";
// import "./Login.css";
// import loginImage from "../../assets/children.webp"; // Replace with your actual image

// const Login = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="login-container">
//         {/* Left Side - Image */}
//         <div className="login-image">
//           <img src={loginImage} alt="Children Learning" />
//         </div>

//         {/* Right Side - Login Form */}
//         <div className="login-form card p-4 shadow-lg">
//           <h3 className="text-center mb-3">Login To Your Account</h3>
//           <form>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email Address</label>
//               <input type="email" className="form-control" id="email" placeholder="Enter email" required />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password</label>
//               <input type="password" className="form-control" id="password" placeholder="Enter password" required />
//             </div>
//             <button type="submit" className="btn btn-success w-100">Login</button>
//           </form>
//           <div className="text-center mt-3">
//             <a href="#" className="text-decoration-none">Forgot Password?</a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
