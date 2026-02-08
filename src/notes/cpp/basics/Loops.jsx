import React from "react";
import "./Loops.css";

export default function Loops() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Loops in <span>C++</span>
        </h1>
        <p>Execute a block of code repeatedly using loops</p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Loop repetition concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT ARE LOOPS ===== */}
      <div className="topic-card">
        <h2>What are Loops?</h2>
        <p>
          <strong>Loops</strong> are used to execute a block of code repeatedly
          until a given condition becomes false.
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Repetitive execution"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== TYPES ===== */}
      <div className="topic-card highlight">
        <h2>Types of Loops in C++</h2>
        <ul>
          <li><strong>for loop</strong></li>
          <li><strong>while loop</strong></li>
          <li><strong>do-while loop</strong></li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Loop types"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== FOR LOOP ===== */}
      <div className="topic-card">
        <h2>for Loop</h2>
        <pre className="code-block">
{`for(int i = 0; i < 5; i++) {
  cout << i;
}`}
        </pre>

        <p>
          ✔ Used when number of iterations is known  
          <br />
          ✔ Initialization, condition and increment in one line
        </p>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="For loop example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHILE LOOP ===== */}
      <div className="topic-card">
        <h2>while Loop</h2>
        <pre className="code-block">
{`while(condition) {
  // code
}`}
        </pre>

        <p>
          ✔ Condition checked before execution  
          <br />
          ✔ Used when iterations are not fixed
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="While loop execution"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DO WHILE ===== */}
      <div className="topic-card highlight">
        <h2>do-while Loop</h2>
        <pre className="code-block">
{`do {
  // code
} while(condition);`}
        </pre>

        <p>
          ✔ Executes <strong>at least once</strong>  
          <br />
          ✔ Condition checked after execution
        </p>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Do while loop"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card success">
        <h2>Real World Uses of Loops</h2>
        <ul>
          <li>Printing numbers</li>
          <li>Processing arrays</li>
          <li>Menu-driven programs</li>
          <li>Games & simulations</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Loop real world usage"
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
          <strong>Q:</strong> Which loop executes at least once?
        </p>
        <p className="answer">
          ✔ do-while loop
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
          <li>✔ for → fixed iterations</li>
          <li>✔ while → condition based</li>
          <li>✔ do-while → executes at least once</li>
          <li>✔ Core concept of programming</li>
        </ul>
      </div>
    </section>
  );
}
