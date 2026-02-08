import React from "react";
import "./Encapsulation.css";

export default function Encapsulation() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Encapsulation in <span>C</span>
        </h1>
        <p>Wrapping data and functions into a single unit</p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Encapsulation concept in programming"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS ENCAPSULATION ===== */}
      <div className="topic-card">
        <h2>What is Encapsulation?</h2>
        <p>
          <strong>Encapsulation</strong> means wrapping data and the functions
          that operate on that data into a single unit.
        </p>

        <p className="formula">
          <strong>Data + Functions = One Unit</strong>
        </p>

        <img
          src="https://images.unsplash.com/photo-1581091215367-59ab6b5f5d6a"
          alt="Data and functions together"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== HOW C ACHIEVES ENCAPSULATION ===== */}
      <div className="topic-card">
        <h2>How C Achieves Encapsulation?</h2>
        <ul>
          <li>Using <strong>structures</strong></li>
          <li>Accessing data only via <strong>functions</strong></li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="C structures and functions"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== STRUCTURE EXAMPLE ===== */}
      <div className="topic-card highlight">
        <h2>Example using Structure</h2>

        <pre className="code-block">
{`struct Student {
  int roll;
  float marks;
};

void display(struct Student s) {
  printf("%d %.2f", s.roll, s.marks);
}`}
        </pre>

        <ul className="explain-list">
          <li>✔ <strong>Student</strong> → Data</li>
          <li>✔ <strong>display()</strong> → Behavior</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Structure example in C"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DATA HIDING ===== */}
      <div className="topic-card">
        <h2>Data Hiding in C</h2>
        <p>
          Data hiding restricts direct access to variables and allows
          controlled access using functions.
        </p>

        <pre className="code-block">
{`static int balance;

// only functions in same file can access balance`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
          alt="Data hiding and security"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== REAL WORLD ANALOGY ===== */}
      <div className="topic-card">
        <h2>Real World Analogy</h2>
        <p>
          <strong>ATM Machine</strong> is a classic example of encapsulation.
        </p>
        <ul>
          <li>You cannot access internal cash directly</li>
          <li>You interact using buttons (functions)</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1536520002442-39764a41e987"
          alt="ATM machine analogy"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ADVANTAGES ===== */}
      <div className="topic-card success">
        <h2>Advantages of Encapsulation</h2>
        <ul>
          <li>✔ Security</li>
          <li>✔ Controlled access</li>
          <li>✔ Better maintainability</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Secure and maintainable system"
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
          <strong>Q:</strong> Is encapsulation possible in C?
        </p>
        <p className="answer">
          ✔ Yes, using <strong>structures</strong> and <strong>functions</strong>.
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
