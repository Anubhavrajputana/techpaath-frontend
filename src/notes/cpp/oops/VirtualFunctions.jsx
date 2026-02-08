import React from "react";
import "./VirtualFunctions.css";

export default function VirtualFunctions() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Virtual Functions in <span>C++</span>
        </h1>
        <p>Enable runtime polymorphism using dynamic binding</p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Virtual function runtime binding"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS VIRTUAL FUNCTION ===== */}
      <div className="topic-card">
        <h2>What is a Virtual Function?</h2>
        <p>
          A <strong>virtual function</strong> is a member function that is
          resolved at <strong>runtime</strong> based on the type of object
          being pointed to, not the pointer type.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Runtime polymorphism concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHY VIRTUAL FUNCTIONS ===== */}
      <div className="topic-card highlight">
        <h2>Why Use Virtual Functions?</h2>
        <ul>
          <li>Achieve runtime polymorphism</li>
          <li>Correct function call via base class pointer</li>
          <li>Supports dynamic binding</li>
          <li>Essential in inheritance</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Dynamic binding"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== SYNTAX & EXAMPLE ===== */}
      <div className="topic-card success">
        <h2>Example</h2>
        <pre className="code-block">
{`class Base {
public:
  virtual void show() {
    cout << "Base";
  }
};

class Derived : public Base {
public:
  void show() {
    cout << "Derived";
  }
};

Base* b = new Derived();
b->show(); // Output: Derived`}
        </pre>

        <p>
          ✔ Function call resolved at runtime  
          <br />
          ✔ Base pointer calls Derived version  
          <br />
          ✔ Achieves runtime polymorphism
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Virtual function example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== VTABLE CONCEPT ===== */}
      <div className="topic-card">
        <h2>How Virtual Functions Work (vTable)</h2>
        <p>
          C++ uses a <strong>Virtual Table (vTable)</strong> to resolve virtual
          function calls at runtime.
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Virtual table concept"
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
          Think of a <strong>remote control</strong>:
          <br />
          Same button → different action depending on device.
        </p>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="Remote control runtime behavior"
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
          <strong>Q:</strong> Why are virtual functions required?
        </p>
        <p className="answer">
          ✔ To ensure correct function call at runtime using base class pointer.
        </p>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Interview preparation virtual functions"
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
          <li>✔ Virtual functions enable runtime polymorphism</li>
          <li>✔ Function call resolved at runtime</li>
          <li>✔ Uses vTable internally</li>
          <li>✔ Essential for OOPS in C++</li>
        </ul>
      </div>
    </section>
  );
}
