// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react";
// // import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Components/Login/Login';
// import HomePage from './Components/HomePage/HomePage';


// function App() {
//   return (
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path='/login' element={<Login />}></Route>
//     //   </Routes>
//     // </BrowserRouter>
//     // <Router>  
//     //   <Routes>
//     //     <Route path="/login" element={<Login />} />
//     //   </Routes>
//     // </Router>
//     <div>
//       <Login/>
//       <HomePage/>
//     </div>
    
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
          <div className="flex-grow-1">
            <Routes>
                {/* Home page at "/" */}
                <Route path="/" element={<HomePage />} />
                
                {/* Login page at "/login" */}
                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

            </Routes>
            </div>
        <Footer /> 
      </div>
    </Router> 
  );
}

export default App;
