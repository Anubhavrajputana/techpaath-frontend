import React from "react";
import "./Operators.css";

export default function Operators() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Operators in <span>Python</span>
        </h1>
        <p>Symbols used to perform operations on data</p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Python operators"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WHAT ARE OPERATORS ===== */}
      <div className="topic-card">
        <h2>What are Operators?</h2>
        <p>
          <strong>Operators</strong> are special symbols used to perform
          operations on variables and values.
        </p>

        <ul>
          <li>Mathematical calculations</li>
          <li>Comparisons</li>
          <li>Logical decisions</li>
          <li>Assignments</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Operators overview"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== ARITHMETIC ===== */}
      <div className="topic-card highlight">
        <h2>1️⃣ Arithmetic Operators</h2>

        <pre className="code-block">
{`a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.33
print(a % b)   # 1
print(a ** b)  # 1000
print(a // b)  # 3`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Arithmetic operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== COMPARISON ===== */}
      <div className="topic-card highlight">
        <h2>2️⃣ Comparison Operators</h2>

        <pre className="code-block">
{`a = 10
b = 5

print(a == b)   # False
print(a > b)    # True
print(a <= b)   # False`}
        </pre>

        <p>Comparison operators always return <strong>True</strong> or <strong>False</strong>.</p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Comparison operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== LOGICAL ===== */}
      <div className="topic-card">
        <h2>3️⃣ Logical Operators</h2>

        <pre className="code-block">
{`x = True
y = False

print(x and y)  # False
print(x or y)   # True
print(not x)    # False`}
        </pre>

        <p>Used to combine multiple conditions.</p>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Logical operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== ASSIGNMENT ===== */}
      <div className="topic-card highlight">
        <h2>4️⃣ Assignment Operators</h2>

        <pre className="code-block">
{`x = 10
x += 5
print(x)  # 15`}
        </pre>

        <p>Assignment operators update variable values.</p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Assignment operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== MEMBERSHIP ===== */}
      <div className="topic-card">
        <h2>5️⃣ Membership Operators</h2>

        <pre className="code-block">
{`nums = [1, 2, 3, 4]

print(3 in nums)       # True
print(10 not in nums) # True`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Membership operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== IDENTITY ===== */}
      <div className="topic-card highlight">
        <h2>6️⃣ Identity Operators</h2>

        <pre className="code-block">
{`a = 10
b = 10
print(a is b)  # True`}
        </pre>

        <p>Checks whether both variables point to the same memory location.</p>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="Identity operators"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== COMMON MISTAKES ===== */}
      <div className="topic-card">
        <h2>Common Mistakes</h2>
        <ul>
          <li>❌ Using = instead of ==</li>
          <li>❌ Using <code>is</code> instead of ==</li>
          <li>❌ Integer division confusion</li>
          <li>❌ Logical operator misuse</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Operator mistakes"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card success">
        <h2>Real World Usage</h2>
        <ul>
          <li>Mathematical calculations</li>
          <li>Decision making</li>
          <li>Filtering data</li>
          <li>Validations</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Real world logic"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="topic-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ Arithmetic → calculations</li>
          <li>✔ Comparison → conditions</li>
          <li>✔ Logical → decision making</li>
          <li>✔ Assignment → value updates</li>
          <li>✔ Membership → searching</li>
          <li>✔ Identity → memory comparison</li>
        </ul>

        <p>
          Operators are a <strong>foundation topic</strong> for Python logic
          building and interviews.
        </p>
      </div>
    </section>
  );
}
