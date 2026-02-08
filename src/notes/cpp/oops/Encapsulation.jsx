import React from "react";
import "./Encapsulation.css";

export default function Encapsulation() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Encapsulation in <span>C++</span>
        </h1>
        <p>Binding data and methods together with data hiding</p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Encapsulation concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS ENCAPSULATION ===== */}
      <div className="topic-card">
        <h2>What is Encapsulation?</h2>
        <p>
          <strong>Encapsulation</strong> is an OOPS concept that means
          <strong> data hiding</strong>.  
          It binds data members and member functions together and restricts
          direct access to data.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Data hiding concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ACCESS SPECIFIERS ===== */}
      <div className="topic-card highlight">
        <h2>Access Specifiers in C++</h2>
        <ul>
          <li><strong>private</strong> – accessible only inside the class</li>
          <li><strong>public</strong> – accessible from anywhere</li>
          <li><strong>protected</strong> – accessible in derived classes</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Access specifiers"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== HOW ENCAPSULATION WORKS ===== */}
      <div className="topic-card">
        <h2>How Encapsulation Works</h2>
        <p>
          Data members are kept <strong>private</strong> and are accessed or
          modified only through <strong>public methods</strong>.
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Encapsulation working"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card success">
        <h2>Example: Encapsulation in C++</h2>
        <pre className="code-block">
{`class Bank {
private:
  int balance;

public:
  void set(int b) {
    balance = b;
  }

  int get() {
    return balance;
  }
};`}
        </pre>

        <p>
          ✔ <code>balance</code> is private  
          <br />
          ✔ Accessed only via <code>set()</code> and <code>get()</code>  
          <br />
          ✔ Data is protected from direct access
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Encapsulation code example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== REAL WORLD EXAMPLE ===== */}
      <div className="topic-card">
        <h2>Real World Example</h2>
        <p>
          Think of an <strong>ATM machine</strong>:
          <br />
          You cannot access cash directly.  
          You use buttons (methods) to withdraw money.
        </p>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="ATM encapsulation example"
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
          <strong>Q:</strong> How is encapsulation achieved in C++?
        </p>
        <p className="answer">
          ✔ Using access specifiers (private, public, protected).
        </p>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Interview preparation encapsulation"
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
          <li>✔ Encapsulation means data hiding</li>
          <li>✔ Achieved using access specifiers</li>
          <li>✔ Improves security & maintainability</li>
          <li>✔ Core OOPS concept</li>
        </ul>
      </div>
    </section>
  );
}
