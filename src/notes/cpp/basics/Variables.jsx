import React from "react";
import "./Variables.css";

export default function Variables() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Variables & Data Types in <span>C++</span>
        </h1>
        <p>Store, manage and manipulate data efficiently</p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Variables and memory"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS VARIABLE ===== */}
      <div className="topic-card">
        <h2>What is a Variable?</h2>
        <p>
          A <strong>variable</strong> is a named memory location used to store
          data during program execution.
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Variable memory concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DATA TYPES ===== */}
      <div className="topic-card highlight">
        <h2>Data Types in C++</h2>
        <ul>
          <li><strong>int</strong> – integers</li>
          <li><strong>float</strong> – decimal values</li>
          <li><strong>double</strong> – high precision decimals</li>
          <li><strong>char</strong> – single character</li>
          <li><strong>bool</strong> – true / false</li>
          <li><strong>string</strong> – text (using STL)</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="C++ data types"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card">
        <h2>Example</h2>
        <pre className="code-block">
{`int age = 20;
float salary = 45000.50;
string name = "Alex";`}
        </pre>

        <p>
          ✔ Each variable stores a different type of data  
          <br />
          ✔ Data type decides memory size and usage
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Variable examples"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== NAMING RULES ===== */}
      <div className="topic-card highlight">
        <h2>Rules for Naming Variables</h2>
        <ul>
          <li>Must start with a letter or underscore (_)</li>
          <li>Cannot use C++ keywords</li>
          <li>No spaces allowed</li>
          <li>Case-sensitive</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="Variable naming rules"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== SCOPE ===== */}
      <div className="topic-card">
        <h2>Scope of Variables</h2>
        <ul>
          <li><strong>Local</strong> – accessible inside a function</li>
          <li><strong>Global</strong> – accessible throughout program</li>
          <li><strong>Static</strong> – value preserved between calls</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Variable scope"
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
          <strong>Q:</strong> What decides the size of a variable in C++?
        </p>
        <p className="answer">
          ✔ The data type of the variable.
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
          <li>✔ Variables store data</li>
          <li>✔ Data types define size & behavior</li>
          <li>✔ Scope controls accessibility</li>
          <li>✔ Core foundation of C++</li>
        </ul>
      </div>
    </section>
  );
}
