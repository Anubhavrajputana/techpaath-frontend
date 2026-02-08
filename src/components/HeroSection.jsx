import React from "react";
import { Button, Container } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="overlay"></div>

      <Container className="text-center hero-content">
        <h1 className="hero-title">
          <span className="highlight-green">Empower</span> Your 
          <span className="highlight-blue"> Tech Journey</span> 🚀
        </h1>
        <p className="hero-subtitle">
          Learn, Build, and Get Hired with Internships, Courses, Notes & Roadmaps.
        </p>
        <Button className="btn-hero">Get Started</Button>

        <div className="floating-icons">
          <i className="fab fa-java"></i>
          <i className="fab fa-python"></i>
          <i className="fab fa-js-square"></i>
          <i className="fab fa-react"></i>
          <i className="fab fa-cuttlefish"></i>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
