import React from "react";
import "./ClassesObjects.css";

export default function ClassesObjects() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Classes & Objects in <span>C++</span>
        </h1>
        <p>Foundation of Object-Oriented Programming</p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Class and Object concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== CLASS ===== */}
      <div className="topic-card">
        <h2>What is a Class?</h2>
        <p>
          A <strong>class</strong> is a <strong>blueprint</strong> that defines
          properties (data members) and behaviors (member functions).
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Class blueprint"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== OBJECT ===== */}
      <div className="topic-card highlight">
        <h2>What is an Object?</h2>
        <p>
          An <strong>object</strong> is an <strong>instance of a class</strong>.
          It represents a real-world entity created using the class.
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Object instance"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card success">
        <h2>Example: Class & Object</h2>
        <pre className="code-block">
{`class Student {
public:
  int roll;
  void show() {
    cout << roll;
  }
};

Student s;
s.roll = 10;
s.show();`}
        </pre>

        <p>
          ✔ <code>Student</code> is a class  
          <br />
          ✔ <code>s</code> is an object  
          <br />
          ✔ Object accesses class members
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Class object example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card">
        <h2>Real World Example</h2>
        <p>
          Think of a <strong>Car</strong>:
          <br />
          Class → Car design  
          <br />
          Object → Actual car on road
        </p>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Real world object example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INTERVIEW ===== */}
      <div className="topic-card interview">
        <h2>Interview Question</h2>
        <p>
          <strong>Q:</strong> What is the difference between class and object?
        </p>
        <p className="answer">
          ✔ Class is a blueprint, object is its instance.
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
          <li>✔ Class defines structure & behavior</li>
          <li>✔ Object represents real entity</li>
          <li>✔ Core concept of OOPS</li>
          <li>✔ Widely used in C++ programs</li>
        </ul>
      </div>
    </section>
  );
}
