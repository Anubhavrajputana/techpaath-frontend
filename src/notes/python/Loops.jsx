import React from "react";
import "./Loops.css";

export default function Loops() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Loops in <span>Python</span>
        </h1>
        <p>Execute a block of code repeatedly using conditions</p>

        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          alt="Python loops concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WHAT ARE LOOPS ===== */}
      <div className="topic-card">
        <h2>What are Loops?</h2>
        <p>
          Loops are used to execute a block of code repeatedly as long as a
          given condition is <strong>true</strong>.
        </p>

        <ul>
          <li>Automates repetitive tasks</li>
          <li>Reduces code length</li>
          <li>Improves efficiency</li>
        </ul>

        <p>
          Python provides two main loops:
          <strong> for</strong> loop and <strong>while</strong> loop.
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Loop execution flow"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== FOR LOOP ===== */}
      <div className="topic-card highlight">
        <h2>1️⃣ For Loop in Python</h2>
        <p>
          The <strong>for loop</strong> is used to iterate over a sequence like
          list, string, tuple, or range.
        </p>

        <pre className="code-block">
{`for i in range(1, 6):
    print(i)`}
        </pre>

        <p><strong>Output:</strong> 1 2 3 4 5</p>

        <ul>
          <li><code>range(1, 6)</code> → generates numbers 1 to 5</li>
          <li><code>i</code> takes one value at a time</li>
        </ul>

        <p>
          <strong>When to use:</strong>  
          ✔ Number of iterations is known  
          ✔ Traversing collections
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="For loop example"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WHILE LOOP ===== */}
      <div className="topic-card highlight">
        <h2>2️⃣ While Loop in Python</h2>
        <p>
          The <strong>while loop</strong> executes as long as the condition
          remains true.
        </p>

        <pre className="code-block">
{`i = 1
while i <= 5:
    print(i)
    i += 1`}
        </pre>

        <p><strong>Output:</strong> 1 2 3 4 5</p>

        <ul>
          <li>Condition checked before each iteration</li>
          <li>Increment is mandatory to avoid infinite loop</li>
        </ul>

        <p>
          <strong>When to use:</strong>  
          ✔ Iterations not fixed  
          ✔ Condition-based repetition
        </p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="While loop logic"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== BREAK ===== */}
      <div className="topic-card">
        <h2>3️⃣ Break Statement</h2>
        <p>
          The <strong>break</strong> statement terminates the loop immediately.
        </p>

        <pre className="code-block">
{`for i in range(1, 10):
    if i == 5:
        break
    print(i)`}
        </pre>

        <p><strong>Output:</strong> 1 2 3 4</p>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Break statement"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== CONTINUE ===== */}
      <div className="topic-card">
        <h2>4️⃣ Continue Statement</h2>
        <p>
          The <strong>continue</strong> statement skips the current iteration
          and moves to the next one.
        </p>

        <pre className="code-block">
{`for i in range(1, 6):
    if i == 3:
        continue
    print(i)`}
        </pre>

        <p><strong>Output:</strong> 1 2 4 5</p>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Continue statement"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== PASS ===== */}
      <div className="topic-card">
        <h2>5️⃣ Pass Statement</h2>
        <p>
          The <strong>pass</strong> statement is used as a placeholder when no
          action is required.
        </p>

        <pre className="code-block">
{`for i in range(5):
    pass`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Pass statement"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== COMMON MISTAKES ===== */}
      <div className="topic-card">
        <h2>Common Mistakes</h2>
        <ul>
          <li>❌ Wrong indentation</li>
          <li>❌ Infinite while loops</li>
          <li>❌ Wrong range usage</li>
          <li>❌ Missing increment</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Loop errors"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card success">
        <h2>Real World Use Cases</h2>
        <ul>
          <li>Processing files</li>
          <li>Automation scripts</li>
          <li>Data analysis</li>
          <li>Games & simulations</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Automation scripts"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="topic-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ for → sequence based looping</li>
          <li>✔ while → condition based looping</li>
          <li>✔ break → exit loop</li>
          <li>✔ continue → skip iteration</li>
          <li>✔ pass → empty loop body</li>
        </ul>

        <p>
          Loops are a <strong>core concept</strong> in Python interviews and
          real-world projects.
        </p>
      </div>
    </section>
  );
}
