import React from "react";
import { motion } from "framer-motion";
import "./GetStarted.css";


export default function GetStarted() {
  return (
    <div className="gs-page">
      <motion.div 
        className="gs-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Start Your Learning Journey 🚀</h1>
        <p>Your personalized roadmap to skills, projects & internships begins here.</p>

        <motion.button
          className="gs-btn"
          whileHover={{ scale: 1.07 }}
          onClick={() => window.location="/signup"}
        >
          Create Your Account
        </motion.button>
      </motion.div>

      <div className="gs-cards">
        {[
          { title: "Choose a Skill Path", desc: "Programming, UI/UX, Web Dev & more." },
          { title: "Build Real Projects", desc: "Hands-on tasks and portfolio building." },
          { title: "Get Internship Ready", desc: "Mock interviews & resume support." }
        ].map((c, i) => (
          <motion.div
            className="gs-card"
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
