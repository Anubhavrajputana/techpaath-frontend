import React from "react";
import "./Abstraction.css";

const Abstraction = () => {
  return (
    <div className="abstraction-page">
      {/* ================= HERO SECTION ================= */}
      <section className="abstraction-hero">
        <h1>
          Abstraction in <span>C Language</span>
        </h1>
        <p>Hide complexity. Show only what matters.</p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Abstraction Concept"
          className="hero-image"
        />
      </section>

      {/* ================= WHAT IS ABSTRACTION ================= */}
      <section className="abstraction-card glass">
        <h2>📌 What is Abstraction?</h2>
        <p>
          <strong>Abstraction</strong> means hiding internal implementation
          details and exposing only the necessary features to the user.
        </p>

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Code Abstraction Concept"
          className="section-image"
        />

        <div className="example-box">
          <h3>🎮 Real Life Example</h3>
          <p>
            You use a <strong>TV remote</strong>, but you don’t know anything
            about its internal circuitry.
          </p>

          <img
            src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
            alt="TV Remote Example"
          />
        </div>
      </section>

      {/* ================= HOW C ACHIEVES ABSTRACTION ================= */}
      <section className="abstraction-card glass">
        <h2>⚙ How C Achieves Abstraction?</h2>
        <ul>
          <li>Using function prototypes</li>
          <li>Using header files</li>
          <li>Interfaces via functions</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          alt="C Programming Functions"
          className="section-image"
        />
      </section>

      {/* ================= CODE EXAMPLE ================= */}
      <section className="abstraction-card glass">
        <h2>💡 Code Example</h2>

        <pre className="code-block">
{`void startCar();

// User only knows startCar()
// Internal engine logic is hidden`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Code Logic Hidden"
          className="section-image"
        />
      </section>

      {/* ================= HEADER FILE CONCEPT ================= */}
      <section className="abstraction-card glass">
        <h2>📁 Header File Concept</h2>

        <div className="two-column">
          <div className="column">
            <h3>car.h</h3>
            <p>Function Declaration</p>
            <img
              src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
              alt="Header File"
            />
          </div>

          <div className="column">
            <h3>car.c</h3>
            <p>Function Definition</p>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="C Source File"
            />
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="abstraction-card glass">
        <h2>✨ Benefits of Abstraction</h2>
        <ul className="benefits">
          <li>✔ Simpler interface</li>
          <li>✔ Reduced complexity</li>
          <li>✔ Easier debugging</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Clean Architecture"
          className="section-image"
        />
      </section>

      {/* ================= INTERVIEW POINT ================= */}
      <section className="abstraction-card interview glass">
        <h2>🎯 Interview Point</h2>
        <p>
          <strong>Q:</strong> Does C support abstraction?
        </p>
        <p className="answer">
          ✔ Yes, using function declarations and header files.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Interview Preparation"
          className="section-image"
        />
      </section>
    </div>
  );
};

export default Abstraction;
