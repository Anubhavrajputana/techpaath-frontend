import React from "react";
import FeaturesSection from "../components/FeaturesSection";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="home-hero">
        <h1>
          <span style={{ color: "#0072BC" }}>Welcome to</span>

          <img
            src="./Logo.png"
            alt="TechPaath Solutions"
            className="home-logo"
          />
        </h1>

        <p>Empowering innovation through technology and learning.</p>

        {/* CTA BUTTONS */}
        <div className="home-cta">
          <Button as={Link} to="/login" variant="primary">
            Get Started
          </Button>

          <Button as={Link} to="/signup" variant="success">
            Join Now
          </Button>
        </div>
      </section>

      {/* FEATURES */}
      <FeaturesSection />
    </div>
  );
};

export default Home;
