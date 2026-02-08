import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/courses.css";

import { useAuth } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";

/* 🔥 COURSE LIST WITH SHORT IDS */
const courses = [
  {
    id: "fullstack",
    name: "Fullstack Web Development",
    price: 499,
    tag: "🔥 Launch Offer",
    desc: "HTML, CSS, JS, React, Node.js, Projects",
  },
  {
    id: "c",
    name: "C Programming Mastery",
    price: 299,
    tag: "⭐ Bestseller",
    desc: "Pointers, Memory, DSA Basics",
  },
  {
    id: "python",
    name: "Python Mastery",
    price: 299,
    tag: "⭐ Trending",
    desc: "Automation, ML Basics, Mini Projects",
  },
  {
    id: "java",
    name: "Java Development",
    price: 299,
    tag: "🔥 Industry Ready",
    desc: "OOP, Backend, Mini Projects",
  },
];

export default function PremiumCourses() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  /* ===============================
     🔍 FETCH ENROLLED COURSES
  ================================ */
  useEffect(() => {
    if (!user) return;

    axiosInstance
      .get("/enrolls/my")
      .then((res) => {
        setEnrolledCourses(res.data.map((e) => e.course)); // ["c","python"]
      })
      .catch((err) => {
        console.error("Fetch enrolled courses error:", err);
      });
  }, [user]);

  /* ===============================
     🚀 ENROLL HANDLER
  ================================ */
  const handleEnroll = (courseName) => {
    navigate(`/enroll?course=${encodeURIComponent(courseName)}`);
  };

  return (
    <div className="courses-container">
      <h1 className="courses-title">
        Premium <span className="blue">TechPaath</span> Courses
      </h1>

      <p className="courses-subtitle">
        Special launch offer for students! ⚡
      </p>

      <div className="courses-grid">
        {courses.map((course, index) => {
          const isEnrolled = enrolledCourses.includes(course.id);

          return (
            <motion.div
              key={index}
              className={`course-card ${isEnrolled ? "enrolled" : ""}`}
              whileHover={{ scale: 1.04 }}
            >
              {/* TAG */}
              <span className="tag">{course.tag}</span>

              {/* 🔥 ENROLLED BADGE (HOVER) */}
              {isEnrolled && (
                <span className="course-badge">Enrolled</span>
              )}

              <h2 className="course-card-title">{course.name}</h2>
              <p className="course-card-desc">{course.desc}</p>

              <div className="price">₹{course.price}</div>

              <button
                className={`enroll-btn ${isEnrolled ? "disabled" : ""}`}
                disabled={isEnrolled}
                onClick={() => handleEnroll(course.name)}
              >
                {isEnrolled ? "Enrolled ✅" : "Enroll Now 🚀"}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
