import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

import cNotes from "../notes/c";
import pythonNotes from "../notes/python";
import cppNotes from "../notes/cpp";
import fullstackNotes from "../notes/fullstack";

import "../styles/NotesTheme.css";
import "./NotesViewer.css";

/* ===============================
   📚 NOTES MAP
================================ */
const notesMap = {
  c: cNotes,
  python: pythonNotes,
  cpp: cppNotes,
  fullstack: fullstackNotes,
};

export default function NotesViewer() {
  const { language } = useParams();
  const { enrolledCourses } = useAuth();

  /* ⏳ WAIT UNTIL ENROLLMENTS LOAD */
  if (!enrolledCourses) return null;

  /* 🔐 BLOCK UNENROLLED ACCESS */
  if (!enrolledCourses.includes(language)) {
    return <Navigate to={`/checkout?course=${language}`} replace />;
  }

  const course = notesMap[language];

  if (!course || !Array.isArray(course.topics)) {
    return <div className="invalid">Invalid Notes</div>;
  }

  return (
    <div className="notes-wrapper">
      {/* ================= SIDEBAR ================= */}
      <aside className="notes-sidebar">
        <h2>{course.title}</h2>

        {course.topics.map((t) => (
          <a key={t.id} href={`#${t.id}`}>
            {t.title}
          </a>
        ))}
      </aside>

      {/* ================= CONTENT ================= */}
      <main className="notes-content">
        <div className="notes-content-inner">
          {course.topics.map((topic) => (
            <motion.section
              key={topic.id}
              id={topic.id}
              className="note-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <topic.component />
            </motion.section>
          ))}
        </div>
      </main>
    </div>
  );
}
