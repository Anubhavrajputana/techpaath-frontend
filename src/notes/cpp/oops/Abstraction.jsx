import React from "react";
import "./Abstraction.css";

export default function Abstraction() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Abstraction in <span>C++</span>
        </h1>
        <p>Hide implementation details and expose only what is necessary</p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Abstraction concept layers"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS ABSTRACTION ===== */}
      <div className="topic-card">
        <h2>What is Abstraction?</h2>
        <p>
          <strong>Abstraction</strong> is an OOPS concept that hides internal
          implementation details and shows only the essential features to the
          user.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Abstraction layers"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== HOW ABSTRACTION IS ACHIEVED ===== */}
      <div className="topic-card highlight">
        <h2>How Abstraction is Achieved in C++?</h2>
        <ul>
          <li><strong>Abstract Classes</strong></li>
          <li><strong>Pure Virtual Functions</strong></li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Abstract class design"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ABSTRACT CLASS ===== */}
      <div className="topic-card">
        <h2>Abstract Class</h2>
        <p>
          A class that contains at least one <strong>pure virtual function</strong>
          is called an abstract class.
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Abstract class structure"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== PURE VIRTUAL FUNCTION ===== */}
      <div className="topic-card highlight">
        <h2>Pure Virtual Function</h2>
        <p>
          A pure virtual function has no body and is represented using
          <strong> = 0</strong>.
        </p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Pure virtual function"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== CODE EXAMPLE ===== */}
      <div className="topic-card success">
        <h2>Example</h2>
        <pre className="code-block">
{`class Shape {
public:
  virtual void draw() = 0;
};`}
        </pre>

        <p>
          ✔ <code>draw()</code> is a pure virtual function  
          <br />
          ✔ Shape becomes an abstract class  
          <br />
          ✔ Cannot create object of Shape directly
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Abstraction code example"
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
          Consider a <strong>Remote Control</strong>:
          <br />
          You press buttons but don’t know how the internal circuitry works.
        </p>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="Remote control abstraction"
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
          <strong>Q:</strong> How is abstraction implemented in C++?
        </p>
        <p className="answer">
          ✔ Using abstract classes and pure virtual functions.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Interview preparation abstraction"
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
          <li>✔ Abstraction hides implementation</li>
          <li>✔ Achieved using abstract classes</li>
          <li>✔ Uses pure virtual functions</li>
          <li>✔ Core OOPS concept</li>
        </ul>
      </div>
    </section>
  );
}
