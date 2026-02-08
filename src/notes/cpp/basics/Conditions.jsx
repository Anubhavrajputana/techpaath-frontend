import React from "react";
import "./Conditions.css";

export default function Conditions() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Conditional Statements in <span>C++</span>
        </h1>
        <p>Control program flow using decision-making statements</p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Decision making logic"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT ARE CONDITIONALS ===== */}
      <div className="topic-card">
        <h2>What are Conditional Statements?</h2>
        <p>
          <strong>Conditional statements</strong> are used to execute different
          blocks of code based on whether a condition is true or false.
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Condition true false logic"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== TYPES ===== */}
      <div className="topic-card highlight">
        <h2>Types of Conditional Statements</h2>
        <ul>
          <li><strong>if</strong></li>
          <li><strong>if - else</strong></li>
          <li><strong>else - if ladder</strong></li>
          <li><strong>switch</strong></li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Multiple decision paths"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== IF ELSE EXAMPLE ===== */}
      <div className="topic-card">
        <h2>if / else Example</h2>
        <pre className="code-block">
{`if(age >= 18) {
  cout << "Adult";
} else {
  cout << "Minor";
}`}
        </pre>

        <p>
          ✔ Condition checks age  
          <br />
          ✔ Output depends on condition result
        </p>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="If else decision example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== SWITCH ===== */}
      <div className="topic-card">
        <h2>switch Statement</h2>
        <pre className="code-block">
{`switch(choice) {
  case 1:
    cout << "One";
    break;
}`}
        </pre>

        <p>
          ✔ Used when there are fixed choices  
          <br />
          ✔ Faster and cleaner than multiple if-else
        </p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Switch case selection"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHEN TO USE SWITCH ===== */}
      <div className="topic-card success">
        <h2>When to Use switch?</h2>
        <ul>
          <li>Menu-driven programs</li>
          <li>Multiple fixed options</li>
          <li>Cleaner logic</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Menu driven program"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INTERVIEW ===== */}
      <div className="topic-card interview">
        <h2>Interview Point</h2>
        <p>
          <strong>Q:</strong> When should switch be preferred over if-else?
        </p>
        <p className="answer">
          ✔ When there are multiple fixed choices.
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
          <li>✔ Controls program flow</li>
          <li>✔ if-else for conditions</li>
          <li>✔ switch for fixed choices</li>
          <li>✔ Very important for logic building</li>
        </ul>
      </div>
    </section>
  );
}
