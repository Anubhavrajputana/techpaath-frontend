import React from "react";
import "./Polymorphism.css";

export default function Polymorphism() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Polymorphism in <span>C++</span>
        </h1>
        <p>One interface, many forms of behavior</p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Polymorphism many forms concept"
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
          <strong>Polymorphism</strong> means <strong>many forms</strong>.
          The same function or method behaves differently based on
          input or object.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Multiple behavior concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== TYPES ===== */}
      <div className="topic-card highlight">
        <h2>Types of Polymorphism in C++</h2>
        <ul>
          <li>
            <strong>Compile-time Polymorphism</strong> (Function Overloading)
          </li>
          <li>
            <strong>Runtime Polymorphism</strong> (Function Overriding)
          </li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Compile time vs runtime polymorphism"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== COMPILE TIME ===== */}
      <div className="topic-card">
        <h2>Compile-time Polymorphism</h2>
        <p>
          Achieved using <strong>function overloading</strong>.  
          Function name is same but parameters are different.
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Function overloading concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card success">
        <h2>Example: Function Overloading</h2>
        <pre className="code-block">
{`void add(int a) {
  cout << a;
}

void add(int a, int b) {
  cout << a + b;
}`}
        </pre>

        <p>
          ✔ Same function name  
          <br />
          ✔ Different parameters  
          <br />
          ✔ Decided at compile time
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Compile time polymorphism example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== RUNTIME ===== */}
      <div className="topic-card highlight">
        <h2>Runtime Polymorphism</h2>
        <p>
          Achieved using <strong>function overriding</strong> with
          <strong> virtual functions</strong>.
        </p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Runtime polymorphism concept"
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
          Think of a <strong>remote control</strong>:
          <br />
          Same button → different action based on mode.
        </p>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="Remote control polymorphism example"
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
          <strong>Q:</strong> How is runtime polymorphism achieved in C++?
        </p>
        <p className="answer">
          ✔ Using virtual functions and function overriding.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Interview preparation polymorphism"
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
          <li>✔ Polymorphism means many forms</li>
          <li>✔ Compile-time → overloading</li>
          <li>✔ Runtime → overriding</li>
          <li>✔ Core OOPS concept</li>
        </ul>
      </div>
    </section>
  );
}
