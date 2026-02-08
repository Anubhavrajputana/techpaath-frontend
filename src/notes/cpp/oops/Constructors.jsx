import React from "react";
import "./Constructors.css";

export default function Constructors() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Constructors in <span>C++</span>
        </h1>
        <p>Special member functions used to initialize objects</p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Object creation concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS CONSTRUCTOR ===== */}
      <div className="topic-card">
        <h2>What is a Constructor?</h2>
        <p>
          A <strong>constructor</strong> is a special member function of a class
          that is <strong>automatically called</strong> when an object is created.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Constructor lifecycle"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== FEATURES ===== */}
      <div className="topic-card highlight">
        <h2>Key Features of Constructors</h2>
        <ul>
          <li>Same name as class</li>
          <li>No return type</li>
          <li>Automatically invoked</li>
          <li>Used to initialize data members</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Constructor features"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== TYPES ===== */}
      <div className="topic-card">
        <h2>Types of Constructors</h2>
        <ul>
          <li><strong>Default Constructor</strong></li>
          <li><strong>Parameterized Constructor</strong></li>
          <li><strong>Copy Constructor</strong></li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Constructor types"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card success">
        <h2>Example: Default Constructor</h2>
        <pre className="code-block">
{`class A {
public:
  A() {
    cout << "Called";
  }
};`}
        </pre>

        <p>
          ✔ Constructor name is same as class name  
          <br />
          ✔ Automatically called when object is created
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Constructor code example"
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
          Think of a <strong>mobile phone</strong>:
          <br />
          When you buy it (object creation), initial setup runs automatically
          (constructor).
        </p>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Constructor real world analogy"
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
          <strong>Q:</strong> Can a constructor have a return type?
        </p>
        <p className="answer">
          ❌ No, constructors do not have return types.
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
          <li>✔ Constructor initializes objects</li>
          <li>✔ Automatically called</li>
          <li>✔ Multiple types supported</li>
          <li>✔ Core OOPS concept</li>
        </ul>
      </div>
    </section>
  );
}
