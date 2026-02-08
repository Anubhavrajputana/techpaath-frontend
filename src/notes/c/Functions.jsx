import React from "react";
import "./Functions.css";

export default function Functions() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Functions in <span>C</span>
        </h1>
        <p>Reusable blocks of code for modular programming</p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Functions and modular programming"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS A FUNCTION ===== */}
      <div className="topic-card">
        <h2>What is a Function?</h2>
        <p>
          A <strong>function</strong> is a block of code that performs a
          specific task and can be reused multiple times.
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Reusable code blocks"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHY FUNCTIONS ===== */}
      <div className="topic-card">
        <h2>Why Functions?</h2>
        <ul>
          <li>Code reusability</li>
          <li>Easy debugging</li>
          <li>Modular programming</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Clean and reusable code"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== SYNTAX ===== */}
      <div className="topic-card highlight">
        <h2>Function Syntax</h2>
        <pre className="code-block">
{`return_type function_name(parameters) {
  // code
}`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="Function syntax in C"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card">
        <h2>Example Function</h2>
        <pre className="code-block">
{`int add(int a, int b) {
  return a + b;
}`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Function example code"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== FUNCTION TYPES ===== */}
      <div className="topic-card">
        <h2>Types of Functions</h2>
        <ol>
          <li>No arguments, no return</li>
          <li>Arguments, no return</li>
          <li>No arguments, return value</li>
          <li>Arguments & return value</li>
        </ol>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Different function types"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== CALL BY VALUE ===== */}
      <div className="topic-card">
        <h2>Call by Value</h2>
        <p>
          In call by value, changes made inside the function
          <strong> do not affect</strong> the original variable.
        </p>

        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="Call by value concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== CALL BY REFERENCE ===== */}
      <div className="topic-card">
        <h2>Call by Reference</h2>
        <p>
          Uses <strong>pointers</strong>. Changes made inside the function
          <strong> reflect</strong> in the original variable.
        </p>

        <img
          src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
          alt="Call by reference using pointers"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INTERVIEW POINT ===== */}
      <div className="topic-card interview">
        <h2>Interview Points</h2>
        <ul>
          <li><strong>main()</strong> is also a function</li>
          <li>Functions improve readability</li>
        </ul>

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
          <li>✔ Core of structured programming</li>
          <li>✔ Helps in better code organization</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Structured programming summary"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>
    </section>
  );
}
