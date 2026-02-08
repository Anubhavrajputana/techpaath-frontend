import React from "react";
import "./Conditions.css";

export default function Conditions() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Conditional Statements in <span>C</span>
        </h1>
        <p>Control program flow using decisions and conditions</p>

        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="Decision making concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT ARE CONDITIONS ===== */}
      <div className="topic-card">
        <h2>What are Conditions?</h2>
        <p>
          Conditional statements control the flow of program execution
          based on given conditions.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Logical decision flow"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== IF STATEMENT ===== */}
      <div className="topic-card">
        <h2>1️⃣ if Statement</h2>
        <pre className="code-block">
{`if (condition) {
  // code
}`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="If condition code"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== IF ELSE ===== */}
      <div className="topic-card">
        <h2>2️⃣ if-else Statement</h2>
        <pre className="code-block">
{`if (condition) {
  // true block
} else {
  // false block
}`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="If else decision"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ELSE IF ===== */}
      <div className="topic-card">
        <h2>3️⃣ else-if Ladder</h2>
        <p>Used when multiple conditions are involved.</p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Multiple condition ladder"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== SWITCH CASE ===== */}
      <div className="topic-card highlight">
        <h2>4️⃣ switch-case</h2>
        <pre className="code-block">
{`switch(expression) {
  case 1:
    break;
  default:
    break;
}`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Switch case logic"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHEN TO USE SWITCH ===== */}
      <div className="topic-card">
        <h2>When to Use switch?</h2>
        <ul>
          <li>Multiple fixed choices</li>
          <li>Menu-driven programs</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Menu driven program"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DRY RUN ===== */}
      <div className="topic-card">
        <h2>Dry Run Example</h2>
        <pre className="code-block">
{`int x = 2;

switch(x)
case 2 → executes case 2`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Dry run logic"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== COMMON MISTAKES ===== */}
      <div className="topic-card">
        <h2>Common Mistakes</h2>
        <ul>
          <li>❌ Missing break statement</li>
          <li>❌ Wrong condition logic</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1600267165607-8f6c4e7b8cfa"
          alt="Programming mistakes"
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
          <li>✔ Controls decision making</li>
          <li>✔ Foundation of logic</li>
          <li>✔ Very important for interviews</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Logic building summary"
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
