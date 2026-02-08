import React from "react";
import "./Conditions.css";

export default function Conditions() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Conditional Statements in <span>Python</span>
        </h1>
        <p>Make decisions in programs using conditions & indentation</p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Decision making flow"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WHAT ARE CONDITIONS ===== */}
      <div className="topic-card">
        <h2>What are Conditional Statements?</h2>
        <p>
          Conditional statements allow a program to take decisions based on
          certain conditions.
        </p>
        <p>
          Python uses <strong>indentation</strong> instead of braces <code>{`{ }`}</code>
          to define blocks.
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="If else flowchart"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== IF ===== */}
      <div className="topic-card highlight">
        <h2>1️⃣ if Statement</h2>
        <p>Executes code only when the condition is TRUE.</p>

        <pre className="code-block">
{`age = 18

if age >= 18:
    print("Eligible to vote")`}
        </pre>

        <p><strong>Output:</strong> Eligible to vote</p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="If condition true"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== IF ELSE ===== */}
      <div className="topic-card">
        <h2>2️⃣ if - else Statement</h2>
        <p>Used when there are exactly two possible outcomes.</p>

        <pre className="code-block">
{`age = 16

if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible")`}
        </pre>

        <p><strong>Output:</strong> Not eligible</p>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="If else decision"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== ELIF ===== */}
      <div className="topic-card highlight">
        <h2>3️⃣ if - elif - else</h2>
        <p>Used to check multiple conditions sequentially.</p>

        <pre className="code-block">
{`marks = 75

if marks >= 90:
    print("Grade A")
elif marks >= 60:
    print("Grade B")
else:
    print("Grade C")`}
        </pre>

        <p><strong>Output:</strong> Grade B</p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Multiple conditions"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== NESTED IF ===== */}
      <div className="topic-card">
        <h2>4️⃣ Nested if Statement</h2>
        <p>An if statement placed inside another if.</p>

        <pre className="code-block">
{`num = 10

if num > 0:
    if num % 2 == 0:
        print("Positive Even Number")`}
        </pre>

        <p><strong>Output:</strong> Positive Even Number</p>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Nested decision"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== LOGICAL OPERATORS ===== */}
      <div className="topic-card highlight">
        <h2>5️⃣ Logical Operators in Conditions</h2>
        <ul>
          <li><strong>and</strong> – both conditions true</li>
          <li><strong>or</strong> – at least one true</li>
          <li><strong>not</strong> – reverses condition</li>
        </ul>

        <pre className="code-block">
{`age = 22
has_id = True

if age >= 18 and has_id:
    print("Entry Allowed")`}
        </pre>

        <p><strong>Output:</strong> Entry Allowed</p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Logical operators"
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
          <li>❌ Using <code>=</code> instead of <code>==</code></li>
          <li>❌ Missing colon <code>:</code></li>
          <li>❌ Incorrect logical operators</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="Python errors"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card success">
        <h2>Real World Applications</h2>
        <ul>
          <li>Login & authentication systems</li>
          <li>Eligibility checks</li>
          <li>Grading systems</li>
          <li>Automation & decision engines</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Automation logic"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="topic-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ if → single condition</li>
          <li>✔ if-else → two outcomes</li>
          <li>✔ elif → multiple conditions</li>
          <li>✔ Indentation is mandatory in Python</li>
        </ul>
      </div>
    </section>
  );
}
