import React from "react";
import "./OOPSIntro.css";

export default function OOPSIntro() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Introduction to <span>OOPS in C</span>
        </h1>
        <p>Understanding object-oriented concepts in a procedural language</p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Object oriented programming concepts"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS OOPS ===== */}
      <div className="topic-card">
        <h2>What is OOPS?</h2>
        <p>
          <strong>Object Oriented Programming System (OOPS)</strong> is a
          programming approach based on <strong>objects</strong>, which combine
          data and behavior.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Objects and data relationship"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== IMPORTANT NOTE ===== */}
      <div className="topic-card warning">
        <h2>Important Note</h2>
        <p>
          ❌ <strong>C language is NOT object-oriented.</strong>
        </p>
        <p>
          ✔ But <strong>OOPS concepts can be implemented</strong> in C using:
        </p>
        <ul>
          <li>Structures</li>
          <li>Functions</li>
          <li>Pointers</li>
          <li>Dynamic Memory Allocation</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="C language procedural limitation"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHY LEARN OOPS IN C ===== */}
      <div className="topic-card">
        <h2>Why Learn OOPS in C?</h2>
        <ul>
          <li>Important for interview questions</li>
          <li>Strong foundation for C++</li>
          <li>Better system-level understanding</li>
          <li>Clear memory-level concepts</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Interview and system programming"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== CORE OOPS CONCEPTS ===== */}
      <div className="topic-card highlight">
        <h2>Core OOPS Concepts</h2>
        <ul>
          <li>Encapsulation</li>
          <li>Abstraction</li>
          <li>Inheritance</li>
          <li>Polymorphism</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Core OOPS concepts"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== HOW C IMPLEMENTS OOPS ===== */}
      <div className="topic-card">
        <h2>How C Implements OOPS Concepts</h2>

        <table className="oops-table">
          <thead>
            <tr>
              <th>OOPS Concept</th>
              <th>C Feature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Class</td>
              <td>struct</td>
            </tr>
            <tr>
              <td>Object</td>
              <td>struct variable</td>
            </tr>
            <tr>
              <td>Methods</td>
              <td>functions</td>
            </tr>
            <tr>
              <td>Data Hiding</td>
              <td>static / scope</td>
            </tr>
            <tr>
              <td>Inheritance</td>
              <td>nested structures</td>
            </tr>
            <tr>
              <td>Polymorphism</td>
              <td>function pointers</td>
            </tr>
          </tbody>
        </table>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Mapping OOPS to C language"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== REAL WORLD EXAMPLE ===== */}
      <div className="topic-card">
        <h2>Real World Example</h2>
        <p>
          Consider a <strong>Student</strong>:
        </p>
        <ul>
          <li>Data → roll, name, marks</li>
          <li>Operations → input(), display()</li>
        </ul>

        <p>
          In C:
          <br />
          ✔ <strong>struct</strong> → data  
          <br />
          ✔ <strong>function</strong> → behavior
        </p>

        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="Student real world example"
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
          <li>✔ C is a procedural language</li>
          <li>✔ OOPS logic can still be implemented</li>
          <li>✔ Very important for interviews</li>
        </ul>
      </div>
    </section>
  );
}
