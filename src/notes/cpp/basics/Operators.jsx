import React from "react";
import "./Operators.css";

export default function Operators() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Operators in <span>C++</span>
        </h1>
        <p>Symbols used to perform operations on data</p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Operators and calculations"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT ARE OPERATORS ===== */}
      <div className="topic-card">
        <h2>What are Operators?</h2>
        <p>
          <strong>Operators</strong> are special symbols used to perform
          operations on variables and values.
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Operation logic"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== TYPES ===== */}
      <div className="topic-card highlight">
        <h2>Types of Operators in C++</h2>
        <ul>
          <li><strong>Arithmetic Operators</strong></li>
          <li><strong>Relational Operators</strong></li>
          <li><strong>Logical Operators</strong></li>
          <li><strong>Assignment Operators</strong></li>
          <li><strong>Increment / Decrement</strong></li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Different operator types"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ARITHMETIC ===== */}
      <div className="topic-card">
        <h2>Arithmetic Operators</h2>
        <p>Used to perform mathematical operations.</p>
        <pre className="code-block">
{`+   -   *   /   %`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="Arithmetic operations"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== RELATIONAL ===== */}
      <div className="topic-card">
        <h2>Relational Operators</h2>
        <p>Used to compare values.</p>
        <pre className="code-block">
{`==   !=   >   <   >=   <=`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Comparison operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== LOGICAL ===== */}
      <div className="topic-card">
        <h2>Logical Operators</h2>
        <p>Used to combine conditions.</p>
        <pre className="code-block">
{`&&   ||   !`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="Logical operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ASSIGNMENT ===== */}
      <div className="topic-card">
        <h2>Assignment Operators</h2>
        <pre className="code-block">
{`=   +=   -=   *=   /=`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Assignment operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INC / DEC ===== */}
      <div className="topic-card highlight">
        <h2>Increment / Decrement</h2>
        <pre className="code-block">
{`++   --`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Increment decrement"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card success">
        <h2>Example</h2>
        <pre className="code-block">
{`int a = 10, b = 5;
cout << a + b;`}
        </pre>

        <p>
          ✔ a + b = 15  
          <br />
          ✔ Result printed using cout
        </p>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Operator example output"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== IMPORTANT ===== */}
      <div className="topic-card interview">
        <h2>Important Point</h2>
        <p>
          <strong>Operator precedence</strong> decides the order of evaluation
          in expressions.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Operator precedence"
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
          <li>✔ Operators perform operations on data</li>
          <li>✔ Used in every C++ program</li>
          <li>✔ Operator precedence is important</li>
        </ul>
      </div>
    </section>
  );
}
