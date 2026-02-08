import React from "react";
import "./Introduction.css";

export default function Introduction() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Introduction to <span>C++</span>
        </h1>
        <p>Fast, powerful and object-oriented programming language</p>

        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          alt="C++ programming"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS C++ ===== */}
      <div className="topic-card">
        <h2>What is C++?</h2>
        <p>
          <strong>C++</strong> is an extension of the C language developed by
          <strong> Bjarne Stroustrup</strong>.  
          It supports both <strong>Procedural</strong> and
          <strong> Object-Oriented Programming</strong>.
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="C++ language concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHY C++ ===== */}
      <div className="topic-card highlight">
        <h2>Why C++?</h2>
        <ul>
          <li>Fast & powerful</li>
          <li>Supports OOPS</li>
          <li>Used in games, OS, browsers</li>
          <li>Popular in competitive programming</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Why use C++"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== FEATURES ===== */}
      <div className="topic-card">
        <h2>Key Features of C++</h2>
        <ul>
          <li>Object-Oriented</li>
          <li>Platform Independent</li>
          <li>Rich Standard Library</li>
          <li>High Performance</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="C++ features"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== FIRST PROGRAM ===== */}
      <div className="topic-card highlight">
        <h2>Simple C++ Program</h2>
        <pre className="code-block">
{`#include <iostream>
using namespace std;

int main() {
  cout << "Hello C++";
  return 0;
}`}
        </pre>

        <p>
          ✔ <code>#include &lt;iostream&gt;</code> for input/output  
          <br />
          ✔ <code>cout</code> prints output  
          <br />
          ✔ <code>main()</code> is program entry point
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="C++ hello world program"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== APPLICATIONS ===== */}
      <div className="topic-card success">
        <h2>Applications of C++</h2>
        <ul>
          <li>Game Development</li>
          <li>System Software</li>
          <li>Embedded Systems</li>
          <li>Financial Applications</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="C++ applications"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INTERVIEW ===== */}
      <div className="topic-card interview">
        <h2>Interview Point</h2>
        <p>
          <strong>Q:</strong> Is C++ procedural or object-oriented?
        </p>
        <p className="answer">
          ✔ C++ supports both procedural and object-oriented programming.
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
          <li>✔ Extension of C language</li>
          <li>✔ Supports OOPS</li>
          <li>✔ High-performance language</li>
          <li>✔ Widely used in industry</li>
        </ul>
      </div>
    </section>
  );
}
