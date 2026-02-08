import React from "react";
import "./Functions.css";

export default function Functions() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Functions in <span>Python</span>
        </h1>
        <p>Reusable blocks of code that perform specific tasks</p>

        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          alt="Python functions concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WHAT IS FUNCTION ===== */}
      <div className="topic-card">
        <h2>What is a Function?</h2>
        <p>
          A <strong>function</strong> is a block of reusable code that performs
          a specific task.
        </p>

        <ul>
          <li>Reduces code duplication</li>
          <li>Improves readability</li>
          <li>Makes programs modular</li>
          <li>Simplifies debugging</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Function flowchart"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== DEFINING FUNCTION ===== */}
      <div className="topic-card highlight">
        <h2>1️⃣ Defining a Function</h2>
        <p>In Python, functions are defined using the <code>def</code> keyword.</p>

        <pre className="code-block">
{`def greet(name):
    print("Hello", name)`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Defining function in Python"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== CALLING FUNCTION ===== */}
      <div className="topic-card">
        <h2>2️⃣ Calling a Function</h2>
        <pre className="code-block">
{`greet("Harsh")`}
        </pre>

        <p><strong>Output:</strong> Hello Harsh</p>

        <ul>
          <li><code>name</code> → parameter</li>
          <li><code>"Harsh"</code> → argument</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Calling function"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== RETURN VALUE ===== */}
      <div className="topic-card highlight">
        <h2>3️⃣ Function with Return Value</h2>
        <pre className="code-block">
{`def add(a, b):
    return a + b

result = add(5, 3)
print(result)`}
        </pre>

        <p><strong>Output:</strong> 8</p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Return value in function"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== TYPES ===== */}
      <div className="topic-card">
        <h2>4️⃣ Types of Functions</h2>
        <ul>
          <li>Built-in → print(), len(), type()</li>
          <li>User-defined → created by programmer</li>
          <li>Lambda → anonymous functions</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Types of functions"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== DEFAULT ARGUMENTS ===== */}
      <div className="topic-card highlight">
        <h2>5️⃣ Default Arguments</h2>
        <pre className="code-block">
{`def greet(name="User"):
    print("Hello", name)

greet()
greet("Harsh")`}
        </pre>

        <p>
          <strong>Output:</strong><br />
          Hello User<br />
          Hello Harsh
        </p>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Default arguments"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== KEYWORD ARGUMENTS ===== */}
      <div className="topic-card">
        <h2>6️⃣ Keyword Arguments</h2>
        <pre className="code-block">
{`def student(name, age):
    print(name, age)

student(age=21, name="Harsh")`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Keyword arguments"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== RECURSION ===== */}
      <div className="topic-card highlight">
        <h2>7️⃣ Recursive Functions</h2>
        <p>A function calling itself is called <strong>recursion</strong>.</p>

        <pre className="code-block">
{`def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n-1)

factorial(5)`}
        </pre>

        <p><strong>Output:</strong> 120</p>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="Recursion logic"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== COMMON MISTAKES ===== */}
      <div className="topic-card">
        <h2>Common Mistakes</h2>
        <ul>
          <li>❌ Forgetting return keyword</li>
          <li>❌ Indentation errors</li>
          <li>❌ Not calling the function</li>
          <li>❌ Infinite recursion</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Python errors"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card success">
        <h2>Real World Use Cases</h2>
        <ul>
          <li>Automation scripts</li>
          <li>Web backend logic</li>
          <li>Machine Learning pipelines</li>
          <li>Game development</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Backend automation"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="topic-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ Functions make code reusable</li>
          <li>✔ Improve readability & structure</li>
          <li>✔ Core interview concept</li>
          <li>✔ Essential for real projects</li>
        </ul>
      </div>
    </section>
  );
}
