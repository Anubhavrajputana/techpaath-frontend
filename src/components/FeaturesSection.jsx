import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FeaturesSection.css";

const features = [
  {
    title: "Internships",
    desc: "Gain real industry exposure with curated tech internships designed to match your skills and career goals. Work on practical tasks, receive mentorship, and build experience that actually matters in interviews and jobs.",
    icon: "💼",
    path: "/internships",
  },
  {
    title: "Interactive Courses",
    desc: "Learn in-demand programming languages like Java, Python, C++, and JavaScript through structured, hands-on courses. Our interactive approach ensures you don’t just learn concepts — you apply them in real scenarios.",
    icon: "📚",
    path: "/courses",
  },
  {
    title: "Contests",
    desc: "Challenge yourself with coding contests and real-world problem statements. Improve your logic, speed, and confidence while competing with peers and showcasing your skills through practical performance.",
    icon: "💻",
    path: "/contests",
  },
  {
    title: "Notes",
    desc: "Get access to well-organized notes and step-by-step roadmaps crafted for beginners to advanced learners. Perfect for quick revision, concept clarity, and guided preparation for exams, interviews, and placements.",
    icon: "🗺️",
    path: "/notes",
  },
];

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="features-section">
      <Container>
        <h2 className="section-title">
          Why Choose TechPaath Solutions?
        </h2>

        {/* 🔥 CSS GRID WRAPPER */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              onClick={() => navigate(feature.path)}
            >
              <div className="feature-icon">{feature.icon}</div>

              <h3 className="feature-title">{feature.title}</h3>

              <p className="feature-desc">{feature.desc}</p>

              <div className="feature-cta">Explore →</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
