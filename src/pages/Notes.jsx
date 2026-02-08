import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import "./Notes.css";

/* ===============================
   📚 COURSES LIST
================================ */
const languages = [
  { id: "c", title: "C Programming", image: "/c.webp" },
  { id: "cpp", title: "C++ Programming", image: "/c++.webp" },
  { id: "python", title: "Python", image: "/python.webp" },
  { id: "java", title: "Java", image: "/java.webp" },
  { id: "fullstack", title: "Full Stack Web Dev", image: "/webicon.webp" },
  { id: "uiux", title: "UI/UX Design", image: "/uiux.webp" },
  { id: "graphic", title: "Graphic Design", image: "/graphic.png" },
];

export default function Notes() {
  const navigate = useNavigate();
  const { enrolledCourses } = useAuth();

  return (
    <div className="notes-container">
      <h1 className="notes-title">Choose Your Learning Path</h1>

      <div className="notes-grid">
        {languages.map((lang) => {
          const unlocked = enrolledCourses.includes(lang.id);

          return (
            <motion.div
              key={lang.id}
              className={`course-card ${!unlocked ? "locked" : ""}`}
              whileHover={unlocked ? { scale: 1.05 } : {}}
              whileTap={unlocked ? { scale: 0.97 } : {}}
              onClick={() =>
                unlocked
                  ? navigate(`/notes/${lang.id}`)
                  : navigate(`/checkout?course=${lang.id}`)
              }
            >
              <img
  src={lang.image}
  alt={lang.title}
  className="course-card-img"
  draggable="false"
/>


              <h3>{lang.title}</h3>

              {!unlocked && <span className="lock">🔒 Locked</span>}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
