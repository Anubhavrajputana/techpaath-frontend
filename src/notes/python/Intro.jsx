import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Introduction to <span>Python</span>
        </h1>
        <p>A simple, readable and powerful programming language</p>

        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          alt="Python programming"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WHAT IS PYTHON ===== */}
      <div className="topic-card">
        <h2>What is Python?</h2>
        <p>
          <strong>Python</strong> is a high-level, interpreted, general-purpose
          programming language created by <strong>Guido van Rossum</strong> in 1991.
        </p>

        <ul>
          <li>High-level & easy to read</li>
          <li>Interpreted language</li>
          <li>Human-friendly syntax</li>
          <li>Less code, more work</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Readable code"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== HOW PYTHON WORKS ===== */}
      <div className="topic-card highlight">
        <h2>How Python Works (Execution Flow)</h2>
        <ol>
          <li>Python code written in <code>.py</code> file</li>
          <li>Code sent to Python Interpreter</li>
          <li>Converted into bytecode</li>
          <li>Executed by Python Virtual Machine (PVM)</li>
        </ol>

        <p>
          👉 Python does <strong>not</strong> require compilation like C or C++.
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Python execution flow"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WHY PYTHON ===== */}
      <div className="topic-card">
        <h2>Why Learn Python?</h2>
        <ul>
          <li>Beginner-friendly syntax</li>
          <li>Used by top companies</li>
          <li>High job demand</li>
          <li>AI, ML, Web & Automation support</li>
          <li>Huge open-source community</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Python applications"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== FIRST PROGRAM ===== */}
      <div className="topic-card highlight">
        <h2>First Python Program</h2>
        <pre className="code-block">
{`print("Hello, World!")`}
        </pre>

        <ul>
          <li><code>print()</code> is a built-in function</li>
          <li>Displays output on screen</li>
          <li>Text inside quotes is printed as it is</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="First Python program"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== DRY RUN ===== */}
      <div className="topic-card">
        <h2>Dry Run of First Program</h2>
        <ol>
          <li>Python reads <code>print()</code></li>
          <li>Interpreter processes the statement</li>
          <li>Output is sent to console</li>
        </ol>

        <p><strong>Output:</strong> Hello, World!</p>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Program execution"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== IMPORTANT POINTS ===== */}
      <div className="topic-card success">
        <h2>Important Points</h2>
        <ul>
          <li>✔ Python is case-sensitive</li>
          <li>✔ Indentation is mandatory</li>
          <li>✔ No semicolon required</li>
          <li>✔ Easy yet powerful</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="Python rules"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="topic-card success">
        <h2>Summary</h2>
        <p>
          Python is simple, readable, powerful and versatile.  
          It is one of the <strong>best languages for beginners</strong> and
          also widely used in <strong>advanced technologies</strong>.
        </p>
      </div>
    </section>
  );
}
