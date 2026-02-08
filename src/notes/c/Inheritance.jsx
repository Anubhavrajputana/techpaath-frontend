import React from "react";
import "./Inheritance.css";

export default function Inheritance() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Inheritance in <span>C</span>
        </h1>
        <p>Acquiring properties using composition and nested structures</p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
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
          <strong>Inheritance</strong> means acquiring properties of one
          structure into another structure.
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Property sharing concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== NOTE ===== */}
      <div className="topic-card warning">
        <h2>Important Note</h2>
        <p>
          ❌ <strong>C does NOT support inheritance directly.</strong>
        </p>

        <img
          src="https://images.unsplash.com/photo-1600267165607-8f6c4e7b8cfa"
          alt="Limitation warning"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== HOW C ACHIEVES INHERITANCE ===== */}
      <div className="topic-card">
        <h2>How C Achieves Inheritance?</h2>
        <ul>
          <li>Using <strong>nested structures</strong></li>
          <li>Using <strong>composition</strong></li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Composition in C"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card highlight">
        <h2>Example using Nested Structures</h2>

        <pre className="code-block">
{`struct Person {
  char name[20];
  int age;
};

struct Student {
  struct Person p;
  int roll;
};`}
        </pre>

        <p className="relation">
          ✔ <strong>Student</strong> HAS <strong>Person</strong> data
        </p>

        <p className="relation-type">This is called a <strong>HAS-A</strong> relationship.</p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Nested structure example"
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
          A <strong>Student</strong> is a <strong>Person</strong> with additional
          properties like roll number.
        </p>

        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="Person student relationship"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== LIMITATIONS ===== */}
      <div className="topic-card warning">
        <h2>Limitations of Inheritance in C</h2>
        <ul>
          <li>No access modifiers</li>
          <li>No automatic inheritance</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
          alt="C language limitations"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INTERVIEW QUESTION ===== */}
      <div className="topic-card interview">
        <h2>Interview Question</h2>
        <p>
          <strong>Q:</strong> Does C support inheritance?
        </p>
        <p className="answer">
          ✔ Not directly <br />
          ✔ Achieved using nested structures and composition
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
    </section>
  );
}
