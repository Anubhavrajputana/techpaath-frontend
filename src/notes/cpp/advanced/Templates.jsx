import React from "react";
import "./Templates.css";

export default function Templates() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Templates in <span>C++</span>
        </h1>
        <p>Write generic and reusable code efficiently</p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="C++ templates concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT ARE TEMPLATES ===== */}
      <div className="topic-card">
        <h2>What are Templates?</h2>
        <p>
          <strong>Templates</strong> support <strong>generic programming</strong>,
          allowing functions and classes to work with different data types
          without rewriting code.
        </p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Generic programming concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHY TEMPLATES ===== */}
      <div className="topic-card highlight">
        <h2>Why Use Templates?</h2>
        <ul>
          <li>Code reusability</li>
          <li>Type safety</li>
          <li>Cleaner and shorter code</li>
          <li>Improves maintainability</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Reusable code concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== TEMPLATE SYNTAX ===== */}
      <div className="topic-card">
        <h2>Template Syntax</h2>
        <pre className="code-block">
{`template <typename T>
T functionName(T a, T b) {
  // code
}`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="Template syntax"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card highlight">
        <h2>Example</h2>
        <pre className="code-block">
{`template <typename T>
T add(T a, T b) {
  return a + b;
}`}
        </pre>

        <p>
          ✔ Same function works for <strong>int</strong>, <strong>float</strong>,
          <strong> double</strong>, etc.
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Template function example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card">
        <h2>Real World Analogy</h2>
        <p>
          Think of a <strong>calculator</strong>:
          <br />
          Same logic works for integers, decimals, and large numbers.
        </p>

        <img
          src="https://images.unsplash.com/photo-1587145820266-a5951ee6f620"
          alt="Calculator analogy"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INTERVIEW ===== */}
      <div className="topic-card interview">
        <h2>Interview Question</h2>
        <p>
          <strong>Q:</strong> What is the use of templates in C++?
        </p>
        <p className="answer">
          ✔ To write generic, reusable and type-safe code.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Interview preparation"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="topic-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ Templates enable generic programming</li>
          <li>✔ Reduce code duplication</li>
          <li>✔ Improve type safety</li>
          <li>✔ Widely used in STL</li>
        </ul>
      </div>
    </section>
  );
}
