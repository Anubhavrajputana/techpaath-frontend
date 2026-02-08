import React from "react";
import "./Loops.css";

export default function Loops() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Loops in <span>C</span>
        </h1>
        <p>Repeat execution efficiently using for, while and do-while loops</p>

        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="Loop iteration concept"
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
          Loops are used to execute a block of code repeatedly until a given
          condition becomes <strong>false</strong>.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Repetitive execution"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== FOR LOOP ===== */}
      <div className="topic-card highlight">
        <h2>1️⃣ for Loop</h2>

        <h4>Syntax</h4>
        <pre className="code-block">
{`for(initialization; condition; increment/decrement) {
  // code
}`}
        </pre>

        <h4>Example</h4>
        <pre className="code-block">
{`for(int i = 1; i <= 5; i++) {
  printf("%d ", i);
}`}
        </pre>

        <p><strong>Output:</strong> 1 2 3 4 5</p>

        <p><strong>When to use:</strong></p>
        <ul>
          <li>Number of iterations is known</li>
          <li>Counter-based loops</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="For loop code example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHILE LOOP ===== */}
      <div className="topic-card">
        <h2>2️⃣ while Loop</h2>

        <h4>Syntax</h4>
        <pre className="code-block">
{`while(condition) {
  // code
}`}
        </pre>

        <h4>Example</h4>
        <pre className="code-block">
{`int i = 1;
while(i <= 5) {
  printf("%d ", i);
  i++;
}`}
        </pre>

        <p><strong>Output:</strong> 1 2 3 4 5</p>

        <p><strong>When to use:</strong></p>
        <ul>
          <li>Condition-based repetition</li>
          <li>Iterations not fixed</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="While loop execution"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DO WHILE LOOP ===== */}
      <div className="topic-card">
        <h2>3️⃣ do-while Loop</h2>

        <h4>Syntax</h4>
        <pre className="code-block">
{`do {
  // code
} while(condition);`}
        </pre>

        <h4>Example</h4>
        <pre className="code-block">
{`int i = 1;
do {
  printf("%d ", i);
  i++;
} while(i <= 5);`}
        </pre>

        <p><strong>Output:</strong> 1 2 3 4 5</p>

        <p className="important">
          🔹 Executes at least <strong>once</strong> even if condition is false
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Do while loop execution"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== OUTPUT BASED ===== */}
      <div className="topic-card warning">
        <h2>4️⃣ Output Based Questions</h2>

        <h4>Question 1</h4>
        <pre className="code-block">
{`int i = 0;
for(i = 0; i < 3; i++);
printf("%d", i);`}
        </pre>

        <p><strong>Output:</strong> 3</p>
        <p>Reason: Semicolon ends the loop immediately</p>

        <h4>Question 2</h4>
        <pre className="code-block">
{`int i = 1;
while(i <= 3) {
  printf("%d", i);
}`}
        </pre>

        <p><strong>Output:</strong> Infinite loop</p>
        <p>Reason: <code>i</code> is never incremented</p>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Output based loop questions"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== COMMON MISTAKES ===== */}
      <div className="topic-card">
        <h2>6️⃣ Common Mistakes</h2>
        <ul>
          <li>Missing increment/decrement</li>
          <li>Semicolon after for loop</li>
          <li>Infinite loops</li>
          <li>Using wrong loop type</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1600267165607-8f6c4e7b8cfa"
          alt="Programming mistakes"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== REAL WORLD USE ===== */}
      <div className="topic-card">
        <h2>7️⃣ Real World Use of Loops</h2>
        <ul>
          <li>Menu driven programs</li>
          <li>Data processing</li>
          <li>Repeated calculations</li>
          <li>Games & simulations</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
          alt="Data processing and repetition"
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
          <li><strong>for</strong> → Fixed iterations</li>
          <li><strong>while</strong> → Condition based</li>
          <li><strong>do-while</strong> → Executes at least once</li>
          <li>Very important for interviews</li>
        </ul>
      </div>
    </section>
  );
}
