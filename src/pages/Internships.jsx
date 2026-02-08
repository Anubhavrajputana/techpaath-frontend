import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useAuth } from "../context/AuthContext";
import "./Internships.css";

const internships = [
  { name: "C Programming Internship", desc: "Master C from basics to advanced." },
  { name: "C++ Programming Internship", desc: "Learn OOP & DSA in C++." },
  { name: "Java Development Internship", desc: "Backend + OOP + Mini Projects." },
  { name: "Python Internship", desc: "Automation, ML basics, scripting." },
  { name: "Web Development Internship", desc: "HTML, CSS, JS, React, Backend." },
  { name: "Data Science Internship", desc: "Pandas, ML, Visualization." },
  { name: "Graphic Design Internship", desc: "Photoshop, Illustrator, Canva." },
  { name: "UI/UX Internship", desc: "Figma, Wireframes, Prototypes." },
];

export default function Internships() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [applied, setApplied] = useState([]);

  /* ===============================
     FETCH APPLIED INTERNSHIPS
  ================================ */
  useEffect(() => {
    if (!user) return;

    axiosInstance
      .get("/internships/applied")
      .then((res) => setApplied(res.data.applied || []))
      .catch(() => setApplied([]));
  }, [user]);

  const handleApply = (internshipName) => {
    navigate(`/apply?internship=${encodeURIComponent(internshipName)}`);
  };

  return (
    <div className="internship-container">
      <h1 className="internship-title">
        <span className="blue">Tech</span>
        <span className="green">Paath</span> Internships
      </h1>

      <div className="internship-grid">
        {internships.map((intern, i) => {
          const isApplied = applied.includes(intern.name);

          return (
            <div
              key={i}
              className={`internship-card ${isApplied ? "applied-card" : ""}`}
            >
              {/* ✅ APPLIED BADGE (HOVER ONLY, CSS HANDLES VISIBILITY) */}
              {isApplied && (
                <span className="badge applied">
                  Applied ✓
                </span>
              )}

              <h2 className="internship-card-title">{intern.name}</h2>
              <p className="internship-card-desc">{intern.desc}</p>

              <button
                className="apply-btn"
                onClick={() => handleApply(intern.name)}
                disabled={isApplied}
              >
                {isApplied ? "Already Applied" : "Apply Now 🚀"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
