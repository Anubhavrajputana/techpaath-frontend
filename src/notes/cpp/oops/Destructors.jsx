import React from "react";
import "./Destructors.css";

export default function Destructors() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Destructors in <span>C++</span>
        </h1>
        <p>Automatically called to clean up resources</p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Object destruction lifecycle"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS DESTRUCTOR ===== */}
      <div className="topic-card">
        <h2>What is a Destructor?</h2>
        <p>
          A <strong>destructor</strong> is a special member function that is
          <strong> automatically called</strong> when an object is destroyed.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Destructor concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== SYNTAX ===== */}
      <div className="topic-card highlight">
        <h2>Syntax of Destructor</h2>
        <pre className="code-block">
{`~ClassName() {
  // cleanup code
}`}
        </pre>

        <p>
          ✔ Same name as class  
          <br />
          ✔ Prefixed with <strong>~</strong>  
          <br />
          ✔ No return type
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Destructor syntax"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHY DESTRUCTOR ===== */}
      <div className="topic-card">
        <h2>Why Do We Need Destructors?</h2>
        <ul>
          <li>Free dynamically allocated memory</li>
          <li>Close files and database connections</li>
          <li>Release system resources</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Memory cleanup"
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
public:
  ~A() {
    cout << "Object destroyed";
  }
};`}
        </pre>

        <p>
          ✔ Destructor is called automatically  
          <br />
          ✔ Executes when object goes out of scope
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Destructor example"
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
          Think of a <strong>computer shutdown</strong>:
          <br />
          All programs close and memory is freed automatically.
        </p>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="System shutdown analogy"
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
          <strong>Q:</strong> Can a destructor take parameters?
        </p>
        <p className="answer">
          ❌ No, destructors cannot take parameters and cannot be overloaded.
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
          <li>✔ Destructor cleans up resources</li>
          <li>✔ Automatically called</li>
          <li>✔ Frees memory</li>
          <li>✔ Important for memory management</li>
        </ul>
      </div>
    </section>
  );
}
