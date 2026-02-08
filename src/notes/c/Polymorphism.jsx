import React from "react";
import "./Polymorphism.css";

export default function Polymorphism() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Polymorphism in <span>C</span>
        </h1>
        <p>One interface, multiple behaviors using function pointers</p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Polymorphism concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS POLYMORPHISM ===== */}
      <div className="topic-card">
        <h2>What is Polymorphism?</h2>
        <p>
          <strong>Polymorphism</strong> means <strong>one function behaving in
          different ways</strong> depending on the context.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Multiple behaviors concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== TYPES ===== */}
      <div className="topic-card highlight">
        <h2>Types of Polymorphism</h2>
        <ul>
          <li><strong>Compile-time</strong> polymorphism</li>
          <li><strong>Runtime</strong> polymorphism</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Compile time vs runtime"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== POLYMORPHISM IN C ===== */}
      <div className="topic-card">
        <h2>Polymorphism in C</h2>
        <ul>
          <li>Using <strong>function pointers</strong></li>
          <li>Same function name with different logic</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Function pointer concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card highlight">
        <h2>Example using Function Pointer</h2>

        <pre className="code-block">
{`void add() { printf("Add"); }
void sub() { printf("Subtract"); }

void (*operation)();

operation = add;
operation();

operation = sub;
operation();`}
        </pre>

        <p>
          ✔ Same pointer, <strong>different behavior</strong>
        </p>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="Function pointer execution"
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
          Think of a <strong>remote control button</strong>:
          <br />
          The same button performs <strong>different actions</strong>
          based on the current mode.
        </p>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="Remote control example"
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
          <strong>Q:</strong> How is polymorphism achieved in C?
        </p>
        <p className="answer">
          ✔ Using <strong>function pointers</strong>
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
          <li>✔ One interface, multiple behaviors</li>
          <li>✔ Achieved in C using function pointers</li>
          <li>✔ Very important for interviews</li>
        </ul>
      </div>
    </section>
  );
}
