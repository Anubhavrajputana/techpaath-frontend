import React from "react";
import "./Pointers.css";

export default function Pointers() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Pointers in <span>C</span>
        </h1>
        <p>Understanding memory addresses and indirect access</p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Memory and pointers concept"
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
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Variable and address relationship"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== SYNTAX ===== */}
      <div className="topic-card highlight">
        <h2>Pointer Syntax</h2>
        <pre className="code-block">
{`int *p;`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="Pointer declaration syntax"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card">
        <h2>Pointer Example</h2>
        <pre className="code-block">
{`int a = 10;
int *p = &a;`}
        </pre>

        <p>
          Here, <strong>p</strong> stores the address of <strong>a</strong>.
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Pointer storing address"
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
          <li>Efficient array handling</li>
          <li>Passing arguments by reference</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Efficient memory usage"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== OPERATORS ===== */}
      <div className="topic-card">
        <h2>Important Pointer Operators</h2>
        <ul>
          <li><strong>&amp;</strong> → Address-of operator</li>
          <li><strong>*</strong> → Value-at-address (dereferencing)</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Address and dereference operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== COMMON ERRORS ===== */}
      <div className="topic-card warning">
        <h2>Common Pointer Errors</h2>
        <ul>
          <li>Wild pointer (uninitialized pointer)</li>
          <li>NULL pointer misuse</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1600267165607-8f6c4e7b8cfa"
          alt="Pointer errors and bugs"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INTERVIEW ===== */}
      <div className="topic-card interview">
        <h2>Interview Importance</h2>
        <p>
          Pointers are <strong>very important</strong> for system programming,
          memory management, and interviews.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="System programming interview"
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
          <li>✔ Core concept of C language</li>
          <li>✔ Works directly with memory</li>
          <li>✔ Used in advanced programming</li>
        </ul>
      </div>
    </section>
  );
}
