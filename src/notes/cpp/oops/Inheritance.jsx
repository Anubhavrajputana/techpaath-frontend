import React from "react";
import "./Inheritance.css";

export default function Inheritance() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Inheritance in <span>C++</span>
        </h1>
        <p>Reuse existing code by acquiring properties of another class</p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Inheritance hierarchy concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS INHERITANCE ===== */}
      <div className="topic-card">
        <h2>What is Inheritance?</h2>
        <p>
          <strong>Inheritance</strong> is an OOPS concept that allows a class to
          <strong> reuse properties and methods</strong> of another class.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Code reuse concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== BENEFITS ===== */}
      <div className="topic-card highlight">
        <h2>Why Use Inheritance?</h2>
        <ul>
          <li>Code reusability</li>
          <li>Easy maintenance</li>
          <li>Logical class hierarchy</li>
          <li>Supports polymorphism</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Inheritance benefits"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== TYPES ===== */}
      <div className="topic-card">
        <h2>Types of Inheritance in C++</h2>
        <ul>
          <li><strong>Single Inheritance</strong></li>
          <li><strong>Multiple Inheritance</strong></li>
          <li><strong>Multilevel Inheritance</strong></li>
          <li><strong>Hierarchical Inheritance</strong></li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Types of inheritance"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== SINGLE INHERITANCE ===== */}
      <div className="topic-card highlight">
        <h2>Single Inheritance</h2>
        <p>
          One derived class inherits from a single base class.
        </p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Single inheritance diagram"
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
{`class A {
  // base class
};

class B : public A {
  // derived class
};`}
        </pre>

        <p>
          ✔ <code>A</code> is base class  
          <br />
          ✔ <code>B</code> inherits properties of <code>A</code>
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Inheritance code example"
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
          <strong>Animal → Dog</strong>
          <br />
          Dog inherits properties like eating and walking from Animal.
        </p>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Real world inheritance example"
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
          <strong>Q:</strong> Which inheritance type is not directly supported
          without ambiguity?
        </p>
        <p className="answer">
          ✔ Multiple inheritance (solved using virtual base classes).
        </p>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Interview preparation inheritance"
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
          <li>✔ Inheritance enables code reuse</li>
          <li>✔ Creates parent-child relationship</li>
          <li>✔ Supports scalability</li>
          <li>✔ Core OOPS concept</li>
        </ul>
      </div>
    </section>
  );
}
