import React from "react";
import "./PythonInterview.css";

export default function PythonInterview() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Python <span>Interview Notes</span>
        </h1>
        <p>Most asked Python interview questions with explanations</p>

        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          alt="Python interview preparation"
          className="topic-hero-image"
          loading="lazy"
        />
      </div>

      {/* ===== WHAT IS PYTHON ===== */}
      <div className="topic-card">
        <h2>What is Python?</h2>
        <p>
          Python is a <strong>high-level, interpreted, object-oriented</strong>
          programming language known for its simplicity, readability and
          industry usage.
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Python language overview"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== INTERPRETED ===== */}
      <div className="topic-card highlight">
        <h2>Why is Python Interpreted?</h2>
        <p>
          Python code is executed <strong>line by line</strong> by the Python
          interpreter.
        </p>

        <ul>
          <li>Easier debugging</li>
          <li>No compilation step</li>
          <li>Slightly slower than compiled languages</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Python interpreter"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== LIST VS TUPLE ===== */}
      <div className="topic-card">
        <h2>Difference Between List and Tuple</h2>

        <pre className="code-block">
{`list1 = [1, 2, 3]
tuple1 = (1, 2, 3)`}
        </pre>

        <ul>
          <li><strong>List</strong> → Mutable, slower, more memory</li>
          <li><strong>Tuple</strong> → Immutable, faster, less memory</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="List vs Tuple"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== SELF ===== */}
      <div className="topic-card highlight">
        <h2>What is <code>self</code>?</h2>
        <p>
          <code>self</code> refers to the <strong>current object</strong> of a
          class. It is used to access instance variables and methods.
        </p>

        <pre className="code-block">
{`class Student:
    def show(self):
        print("Hello Student")`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Self keyword"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== INIT ===== */}
      <div className="topic-card">
        <h2>What is <code>__init__</code>?</h2>
        <p>
          <code>__init__</code> is a <strong>constructor</strong> that runs
          automatically when an object is created.
        </p>

        <pre className="code-block">
{`class Student:
    def __init__(self, name):
        self.name = name`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Constructor in Python"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== MUTABLE ===== */}
      <div className="topic-card highlight">
        <h2>Mutable vs Immutable Data Types</h2>

        <ul>
          <li><strong>Mutable:</strong> list, dictionary, set</li>
          <li><strong>Immutable:</strong> int, float, string, tuple</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Mutable vs Immutable"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== PEP8 ===== */}
      <div className="topic-card">
        <h2>What is PEP 8?</h2>
        <p>
          <strong>PEP 8</strong> is Python’s official style guide that improves
          code readability, maintainability and consistency.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="PEP 8 style guide"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== DECORATORS ===== */}
      <div className="topic-card highlight">
        <h2>What are Decorators?</h2>
        <p>
          Decorators modify function behavior without changing the function
          code.
        </p>

        <pre className="code-block">
{`def my_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="Decorators in Python"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== EXCEPTION ===== */}
      <div className="topic-card">
        <h2>Exception Handling</h2>
        <p>
          Exception handling prevents program crash and handles runtime errors.
        </p>

        <pre className="code-block">
{`try:
    x = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Exception handling"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== BREAK CONTINUE PASS ===== */}
      <div className="topic-card highlight">
        <h2>break vs continue vs pass</h2>
        <ul>
          <li><strong>break</strong> → exits loop</li>
          <li><strong>continue</strong> → skips iteration</li>
          <li><strong>pass</strong> → placeholder</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Loop control statements"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== INTERVIEW TIPS ===== */}
      <div className="topic-card success">
        <h2>Interview Tips</h2>
        <ul>
          <li>✔ Follow PEP 8</li>
          <li>✔ Practice dry runs</li>
          <li>✔ Focus on OOP</li>
          <li>✔ Understand real-world use cases</li>
        </ul>

        <p>
          These questions cover <strong>90% of Python interviews</strong>.
        </p>
      </div>
    </section>
  );
}
