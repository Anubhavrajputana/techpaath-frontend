import React from "react";
import "./Pointers.css";

export default function Pointers() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Pointers in <span>C++</span>
        </h1>
        <p>Work directly with memory using addresses</p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Pointer memory concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS POINTER ===== */}
      <div className="topic-card">
        <h2>What is a Pointer?</h2>
        <p>
          A <strong>pointer</strong> is a variable that stores the
          <strong> address of another variable</strong>.
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Address and memory concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== POINTER EXAMPLE ===== */}
      <div className="topic-card highlight">
        <h2>Pointer Example</h2>
        <pre className="code-block">
{`int x = 10;
int *p = &x;`}
        </pre>

        <p>
          ✔ <code>&x</code> gives address of x  
          <br />
          ✔ <code>p</code> stores address of x
        </p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Pointer example memory"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHY POINTERS ===== */}
      <div className="topic-card">
        <h2>Why Use Pointers?</h2>
        <ul>
          <li>Dynamic memory allocation</li>
          <li>Call by reference</li>
          <li>Efficient memory usage</li>
          <li>Low-level system programming</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Memory efficiency"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== CALL BY REFERENCE ===== */}
      <div className="topic-card highlight">
        <h2>Call by Reference</h2>
        <p>
          When pointers are passed to functions, changes made inside the
          function <strong>reflect back</strong> to the original variable.
        </p>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="Call by reference"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card success">
        <h2>Real World Example</h2>
        <p>
          Think of a <strong>house address</strong>:
          <br />
          The address tells where the house is located, not the house itself.
        </p>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Address analogy"
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
          <strong>Q:</strong> Why are pointers important in C++?
        </p>
        <p className="answer">
          ✔ They allow direct memory access and efficient data handling.
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
          <li>✔ Pointers store addresses</li>
          <li>✔ Enable dynamic memory</li>
          <li>✔ Support call by reference</li>
          <li>✔ Core concept of C++</li>
        </ul>
      </div>
    </section>
  );
}
