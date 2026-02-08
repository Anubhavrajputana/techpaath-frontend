import React from "react";
import "./Operators.css";

export default function Operators() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Operators in <span>C</span>
        </h1>
        <p>Symbols that perform operations on data and variables</p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Operators and expressions"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT ARE OPERATORS ===== */}
      <div className="topic-card">
        <h2>What are Operators?</h2>
        <p>
          <strong>Operators</strong> are special symbols used to perform
          operations on variables and values.
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Mathematical and logical operations"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ARITHMETIC ===== */}
      <div className="topic-card highlight">
        <h2>1️⃣ Arithmetic Operators</h2>
        <p><strong>+</strong> <strong>-</strong> <strong>*</strong> <strong>/</strong> <strong>%</strong></p>

        <pre className="code-block">
{`int a = 10, b = 3;
a + b = 13
a % b = 1`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Arithmetic operations in C"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== RELATIONAL ===== */}
      <div className="topic-card">
        <h2>2️⃣ Relational Operators</h2>
        <p>
          <strong>&lt;</strong> <strong>&gt;</strong> <strong>&lt;=</strong>{" "}
          <strong>&gt;=</strong> <strong>==</strong> <strong>!=</strong>
        </p>
        <p>
          Used for comparisons.  
          <br />
          Result → <strong>true (1)</strong> or <strong>false (0)</strong>
        </p>

        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="Comparison operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== LOGICAL ===== */}
      <div className="topic-card">
        <h2>3️⃣ Logical Operators</h2>
        <ul>
          <li><strong>&&</strong> → AND</li>
          <li><strong>||</strong> → OR</li>
          <li><strong>!</strong> → NOT</li>
        </ul>
        <p>Mostly used in conditions and decision making.</p>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Logical decision making"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ASSIGNMENT ===== */}
      <div className="topic-card">
        <h2>4️⃣ Assignment Operators</h2>
        <p>
          <strong>=</strong> <strong>+=</strong> <strong>-=</strong>{" "}
          <strong>*=</strong> <strong>/=</strong>
        </p>

        <pre className="code-block">
{`a += 5;   // a = a + 5`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Assignment operation"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INC / DEC ===== */}
      <div className="topic-card">
        <h2>5️⃣ Increment / Decrement</h2>
        <ul>
          <li><strong>++a</strong> → Pre-increment</li>
          <li><strong>a++</strong> → Post-increment</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Increment decrement operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DRY RUN ===== */}
      <div className="topic-card warning">
        <h2>Dry Run Example</h2>
        <pre className="code-block">
{`int x = 5;
printf("%d", x++);`}
        </pre>

        <p><strong>Output:</strong> 5</p>
        <p>x becomes 6 after execution</p>

        <img
          src="https://images.unsplash.com/photo-1600267165607-8f6c4e7b8cfa"
          alt="Dry run explanation"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INTERVIEW ===== */}
      <div className="topic-card interview">
        <h2>Interview Points</h2>
        <ul>
          <li>Operator precedence matters</li>
          <li><strong>++i</strong> vs <strong>i++</strong></li>
        </ul>

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
          <li>✔ Operators manipulate data</li>
          <li>✔ Used in every program</li>
          <li>✔ Very important for logic building</li>
        </ul>
      </div>
    </section>
  );
}
