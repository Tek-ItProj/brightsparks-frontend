import React from "react";
import Navbar from "../Navbar.jsx";
import graph from "../../assets/chart-column-solid.svg";
import award from "../../assets/award-solid.svg";
import peer from "../../assets/users-solid.svg";
import book from "../../assets/book-open-solid.svg";
import woman from "../../assets/woman.jpg";
import man from "../../assets/man.webp";
import musicMan from "../../assets/musicMan.jpg";

import "./HomePage.css"; // Optional for extra styling

const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className="home-page">
      {/* Hero Section */}
      <section className="bg-black text-white text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold">IGNITE YOUR POTENTIAL</h1>
              <p className="lead">
                Education in Jamaica shouldn’t depend on which school you attend or who your teacher is.
              </p>
              <p>Let’s bridge the education gap together.</p>
              <button className="btn btn-success btn-lg mt-3">Join Bright Sparks →</button>
              <p className="text-muted mt-2">Free for students and institutions across Jamaica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Feature Box 1 */}
            <div className="col-md-3 d-flex">
              <div className="p-4 bg-dark text-white rounded h-100 d-flex flex-column">
                <img src={graph} alt="Growth" className="me-3 mb-3" width="30" height="30" /> 
                <div>
                  <h5 className="mb-3">Track Your Academic Growth</h5>  {/* 🔹 "mb-1" reduces space below heading */}
                  <p className="text-start">  {/* 🔹 "text-start" ensures left-aligned text */}
                    Includes Personalized Dashboards, AI-based recommendations, and more.
                  </p>
                </div>
              </div>
            </div>

          
            <div className="col-md-3 d-flex">
              <div className="p-4 bg-dark text-white rounded h-100 d-flex flex-column">
                <img src={award} alt="Growth" className="me-3 mb-3" width="30" height="30" /> 
                <div>
                  <h5 className="mb-3">Leadership Boards & Competition</h5>  {/* 🔹 "mb-1" reduces space below heading */}
                  <p className="text-start">  {/* 🔹 "text-start" ensures left-aligned text */}
                    Engage in leaderboards, badges, rewards, and user ratings.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Box 3 */}
            <div className="col-md-3 d-flex">
              <div className="p-4 bg-dark text-white rounded h-100 d-flex flex-column">
                <img src={peer} alt="Growth" className="me-3 mb-3" width="30" height="30" /> 
                <div>
                  <h5 className="mb-3">Assignment Help & Peer Reviews</h5>  {/* 🔹 "mb-1" reduces space below heading */}
                  <p className="text-start">  {/* 🔹 "text-start" ensures left-aligned text */}
                    Includes AI suggestions, plagiarism detection, and discussion threads.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Box 4 */}
            <div className="col-md-3 d-flex">
              <div className="p-4 bg-dark text-white rounded h-100 d-flex flex-column">
                <img src={book} alt="Growth" className="me-3 mb-3" width="30" height="30" /> 
                <div>
                  <h5 className="mb-3">Open Tutoring for All</h5>  {/* 🔹 "mb-1" reduces space below heading */}
                  <p className="text-start">  {/* 🔹 "text-start" ensures left-aligned text */}
                    Includes tutor matching, live virtual classrooms, and one-on-one tutoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tutors Section */}
      <section className="py-5 bg-black text-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">EXPERT TUTORS TO SUPPORT YOUR JOURNEY</h2>
          <div className="row text-center">
          {/* Tutor 1 */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="bg-white text-dark rounded overflow-hidden" style={{ width: "320px" }}>  
              <img
                src={woman} alt="Ashley Rodney" className="w-100" style={{ height: "300px", objectFit: "cover" }}/>
              <div className="p-3 text-center" style={{ backgroundColor: "#FFD43B", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>  
                <h4 className="fw-bold mb-1">Ashley Rodney</h4>
                <h6 className="text-muted"><em>Secondary Level</em></h6>
                <p className="fw-bold">Specialty: Social Studies</p>
              </div>
            </div>
          </div>

            {/* Tutor 2 */}            
            <div className="col-md-6 d-flex justify-content-center">
            <div className="bg-white text-dark rounded overflow-hidden" style={{ width: "320px" }}>  
              <img
                src={man} alt="Malik Thompson" className="w-100" style={{ height: "300px", objectFit: "cover" }}/>
              <div className="p-3 text-center" style={{ backgroundColor: "#FFD43B", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>  
                <h4 className="fw-bold mb-1">Malik Thompson</h4>
                <h6 className="text-muted"><em>Undergraduate Level</em></h6>
                <p className="fw-bold">Specialty: Chemistry</p>
              </div>
            </div>
          </div>

          {/* Tutor 3 */}            
          <div className="col-md-6 d-flex justify-content-center">
            <div className="bg-white text-dark rounded overflow-hidden" style={{ width: "320px" }}>  
              <img
                src={musicMan} alt="Ryan Stewart" className="w-100" style={{ height: "300px", objectFit: "cover" }}/>
              <div className="p-3 text-center" style={{ backgroundColor: "#FFD43B", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>  
                <h4 className="fw-bold mb-1">Ryan Stewart</h4>
                <h6 className="text-muted"><em>Primary Level</em></h6>
                <p className="fw-bold">Specialty: Music</p>
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;


// const Homepage = () => {
//   return (
//     <div>
//       {/* Include the Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="hero bg-black text-white text-center py-20">
//         <h1 className="text-4xl font-bold">IGNITE YOUR POTENTIAL</h1>
//         <p className="mt-2 text-lg">
//           Education in Jamaica shouldn't depend on which school you attend or
//           who your teacher is.
//         </p>
//         <p>Let's bridge the education gap together.</p>
//         <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg">
//           Join Bright Sparks
//         </button>
//       </section>

//       {/* Features Section */}
//       <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-gray-100">
//         <div className="text-center">
//           <h3 className="text-xl font-semibold">Track Your Academic Growth</h3>
//           <p>Monitor progress through assessments.</p>
//         </div>
//         <div className="text-center">
//           <h3 className="text-xl font-semibold">
//             Leadership Boards & Healthy Competition
//           </h3>
//           <p>Engage in friendly competition.</p>
//         </div>
//         <div className="text-center">
//           <h3 className="text-xl font-semibold">Assignment Help & Peer Reviews</h3>
//           <p>Get assistance with assignments.</p>
//         </div>
//       </section>

//       {/* Expert Tutors Section */}
//       <section className="bg-white p-8">
//         <h2 className="text-3xl font-bold text-center mb-4">
//           Expert Tutors to Support Your Journey
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="text-center">
//             <img
//               src="/path-to-image/ashley.jpg"
//               alt="Ashley Rodney"
//               className="w-24 h-24 mx-auto rounded-full"
//             />
//             <h3 className="text-xl font-semibold mt-4">Ashley Rodney</h3>
//             <p>Secondary Level - Social Studies</p>
//           </div>
//           <div className="text-center">
//             <img
//               src="/path-to-image/malik.jpg"
//               alt="Malik Thompson"
//               className="w-24 h-24 mx-auto rounded-full"
//             />
//             <h3 className="text-xl font-semibold mt-4">Malik Thompson</h3>
//             <p>Undergraduate Level - Chemistry</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Homepage;
