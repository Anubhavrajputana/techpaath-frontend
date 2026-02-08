import React from "react";
import "./Functions.css";

export default function Functions() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Functions in <span>C++</span>
        </h1>
        <p>Reusable blocks of code for clean and modular programs</p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Functions concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS FUNCTION ===== */}
      <div className="topic-card">
        <h2>What is a Function?</h2>
        <p>
          A <strong>function</strong> is a block of code that performs a specific
          task and can be reused multiple times in a program.
        </p>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="Reusable code blocks"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== TYPES ===== */}
      <div className="topic-card highlight">
        <h2>Types of Functions</h2>
        <ul>
          <li><strong>Built-in Functions</strong></li>
          <li><strong>User-defined Functions</strong></li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Function types"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== FUNCTION EXAMPLE ===== */}
      <div className="topic-card">
        <h2>Function Example</h2>
        <pre className="code-block">
{`int add(int a, int b) {
  return a + b;
}`}
        </pre>

        <p>
          ✔ Takes two integers as input  
          <br />
          ✔ Returns their sum
        </p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Function code example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== CALL BY ===== */}
      <div className="topic-card highlight">
        <h2>Function Calling Methods</h2>
        <ul>
          <li>
            <strong>Call by Value</strong> – changes do not reflect
          </li>
          <li>
            <strong>Call by Reference</strong> – changes reflect
          </li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Call by value vs reference"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card">
        <h2>Real World Example</h2>
        <p>
          Think of a <strong>calculator</strong>:  
          Each operation (add, subtract, multiply) is a separate function.
        </p>

        <img
          src="https://images.unsplash.com/photo-1587145820266-a5951ee6f620"
          alt="Calculator functions"
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
          <strong>Q:</strong> What is the benefit of using functions?
        </p>
        <p className="answer">
          ✔ Code reusability and better readability.
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
          <li>✔ Functions make programs modular</li>
          <li>✔ Reduce code duplication</li>
          <li>✔ Improve readability</li>
          <li>✔ Essential for large programs</li>
        </ul>
      </div>
    </section>
  );
}
