import React from "react";
import logo from "../assets/logo-bs.svg";

const Navbar = () => {
    return (
        // <nav class="navbar bg-body-tertiary">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">
        //         <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
        //         Bright Sparks
        //         </a>
        //     </div>
        // </nav>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
            <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Bright Sparks" width="40" height="40" className="me-2"/>
            <span className="fw-medium">Bright Sparks</span>
            </a>
            <div className="ms-auto">
            <a href="/login" className="text-white me-3 text-decoration-none">Log In</a>
            <a href="/signup" className="btn btn-success">Sign Up</a>
            </div>
        </nav>
    );
};

export default Navbar;