import React from "react";
import { motion } from "framer-motion";
import "./StartLearning.css";

const categories = [
  { title: "C Programming", icon: "🔥" },
  { title: "Python", icon: "🐍" },
  { title: "Java", icon: "☕" },
  { title: "Full Stack Web Dev", icon: "💻" },
  { title: "UI/UX Design", icon: "🎨" },
];

export default function StartLearning() {
  return (
    <div className="sl-page">
      <motion.h1 
        className="sl-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Continue Your Learning 🚀
      </motion.h1>

      <p className="sl-sub">Choose your skill track and start building real-world projects.</p>

      <div className="sl-grid">
        {categories.map((c, i) => (
          <motion.div
            className="sl-card"
            key={i}
            whileHover={{ scale: 1.06 }}
          >
            <div className="sl-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <button onClick={() => window.location="/notes"}>Start</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
