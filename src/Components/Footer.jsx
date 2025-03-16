import React from "react";
import logo from "../assets/logo-bs.svg";
import emailIcon from "../assets/envelope-solid.svg";
import phoneIcon from "../assets/phone-solid.svg";
import openingIcon from "../assets/clock-solid.svg";
import googleApple from "../assets/google-apple.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container">
        <div className="row align-items-start">

          {/* Logo Section */}
          <div className="col-md-3">
            
            <img src={logo} alt="Logo" style={{ width: "80px" }}/>
            {/* <p className="mt-3">© 2025 Bright Sparks | All Rights Reserved</p> */}
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-success text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Invest</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
            <div className="col-md-3">
            <h5 className="fw-bold">Get In Touch</h5>

            <div className="d-flex align-items-center mb-2">
                <img src={emailIcon} alt="Email" width="20" height="20" className="me-2" /> 
                <p className="mb-0">info@sparks.com</p>  
            </div>

            <div className="d-flex align-items-center mb-2">
                <img src={phoneIcon} alt="Phone" width="20" height="20" className="me-2" />
                <p className="mb-0">(876) 123-4567</p>
            </div>

            <div className="d-flex align-items-center">
                <img src={openingIcon} alt="Clock" width="20" height="20" className="me-2" />
                <p className="mb-0">
                Mon - Fri <br /> 9:00am - 4:00pm
                </p>
            </div>
            </div>

          {/* Social Media & App Download */}
          <div className="col-md-3">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#"><i className="fab fa-facebook fa-lg text-white"></i></a>
              <a href="#"><i className="fab fa-instagram fa-lg text-white"></i></a>
              <a href="#"><i className="fab fa-x-twitter fa-lg text-white"></i></a>
              <a href="#"><i className="fab fa-linkedin fa-lg text-white"></i></a>
            </div>
            <h5 className="fw-bold mt-4">Download Now</h5>
            <a href="#"><img src={googleApple} alt="Google Play & App Store" className="img-fluid mt-2" style={{ width: "120px" }} /></a>
        
          </div>

        </div>

        {/* Bottom Links */}
        {/* <div className="text-center mt-4">
            <p className="mb-0">&copy; 2025 Bright Sparks | All Rights Reserved</p>
            <div>
                <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
                <a href="#" className="text-white text-decoration-none">Terms and Conditions</a>
          </div>
        </div> */}
        <div className="mt-4 d-flex flex-column flex-md-row justify-content-between align-items-start">
            <p className="mb-0 text-start">&copy; 2025 Bright Sparks | All Rights Reserved</p>  {/* 🔹 Fully left-aligned */}
            <div className="mt-2 mt-md-0">
                <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
                <a href="#" className="text-white text-decoration-none">Terms and Conditions</a>
        </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
