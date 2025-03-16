import React, { useState } from "react";
// import "./CoursesSection.css"; 
import proseBk from "../assets/proseBk.png";

const subjects = [
  { name: "All Subjects", icon: "📚" },
  { name: "Mathematics", icon: "➗" },
  { name: "English A", icon: "🔠" },
  { name: "Biology", icon: "🧬" },
  { name: "Physics", icon: "⚛️" },
  { name: "Chemistry", icon: "🧪" },
];

const levels = ["Basic", "Primary", "Secondary", "Tertiary"];

const courses = [
  {
    id: 1,
    user: "Math Mavericks",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    icon: "👨‍🏫",
  },
  {
    id: 2,
    user: "Tech Titans",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    icon: "📖",
  },
  {
    id: 3,
    user: "Lab Legends",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    icon: "🧪",
  },
  {
    id: 4,
    user: "Lit & Learn",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    icon: "📚",
    // image: proseBk,
  },
];

const CoursesSection = () => {
  const [selectedLevel, setSelectedLevel] = useState("Secondary");

  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold">COURSES FOR YOU</h2>
      <p className="text-center text-muted">NO MATTER YOUR LEVEL</p>

      {/* Level Tabs */}
      <div className="d-flex justify-content-center mt-3">
        {levels.map((level) => (
          <button
            key={level}
            className={`btn mx-2 ${
              selectedLevel === level ? "btn-success text-white" : "btn-outline-secondary"
            }`}
            onClick={() => setSelectedLevel(level)}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Subject Filters */}
      <div className="d-flex flex-wrap justify-content-center mt-4">
        {subjects.map((subject) => (
          <button key={subject.name} className="btn btn-outline-dark mx-2 my-1">
            {subject.icon} {subject.name}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="row mt-4">
        {courses.map((course) => (
          <div key={course.id} className="col-md-6 col-lg-3 mb-3">
            <div className="card shadow-sm p-3">
              <div className="d-flex align-items-center">
                <span className="fs-3">{course.icon}</span>
                <h5 className="ms-2 mb-0">{course.user}</h5>
              </div>
              <p className="mt-2 text-muted">{course.text}</p>
              {/* {course.image && (
                <img src={course.image} alt="Course" className="img-fluid rounded" />
              )} */}
              <button className="btn btn-success mt-3">Follow</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
