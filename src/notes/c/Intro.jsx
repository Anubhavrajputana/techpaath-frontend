import React from "react";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Introduction to <span>C Programming</span>
        </h1>
        <p>The foundation of system-level and high-performance programming</p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="C programming introduction"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS C ===== */}
      <div className="topic-card">
        <h2>What is C Programming?</h2>
        <p>
          <strong>C</strong> is a powerful, general-purpose, procedural
          programming language developed by <strong>Dennis Ritchie</strong>
          in 1972 at Bell Laboratories.
        </p>

        <p>
          C is often called the <strong>"mother of programming languages"</strong>
          because many modern languages like C++, Java, Python, and Go are inspired by it.
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Low level programming concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHY LEARN C ===== */}
      <div className="topic-card">
        <h2>Why Should You Learn C?</h2>
        <ul>
          <li>Extremely fast execution</li>
          <li>Direct access to memory</li>
          <li>Used to build operating systems</li>
          <li>Strong foundation for other languages</li>
          <li>Widely used in interviews</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Fast and efficient programming"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHERE IS C USED ===== */}
      <div className="topic-card">
        <h2>Where is C Used in Real Life?</h2>
        <ul>
          <li>Operating Systems (Linux, UNIX)</li>
          <li>Embedded Systems & Microcontrollers</li>
          <li>Game Engines</li>
          <li>Compilers & Interpreters</li>
          <li>Database & Networking Software</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
          alt="Embedded systems and OS"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== BASIC STRUCTURE ===== */}
      <div className="topic-card highlight">
        <h2>Basic Structure of a C Program</h2>

        <pre className="code-block">
{`#include <stdio.h>

int main() {
  printf("Hello World");
  return 0;
}`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="C program structure"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== LINE BY LINE ===== */}
      <div className="topic-card">
        <h2>Line by Line Explanation</h2>
        <ul>
          <li><strong>#include &lt;stdio.h&gt;</strong> → Input/Output library</li>
          <li><strong>int main()</strong> → Program execution starts</li>
          <li><strong>printf()</strong> → Prints output</li>
          <li><strong>return 0</strong> → Program ends successfully</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Code explanation"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== PROGRAM FLOW ===== */}
      <div className="topic-card">
        <h2>Program Execution Flow</h2>
        <ol>
          <li>Write C code</li>
          <li>Compile using compiler (gcc)</li>
          <li>Fix errors if any</li>
          <li>Execute program</li>
          <li>Output shown</li>
        </ol>

        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="Program execution flow"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DRY RUN ===== */}
      <div className="topic-card">
        <h2>First Program Dry Run</h2>

        <pre className="code-block">
{`printf("Hello");`}
        </pre>

        <p>
          <strong>Dry Run:</strong> <br />
          • printf prints text <br />
          • Output → Hello
        </p>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Dry run example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== FEATURES ===== */}
      <div className="topic-card">
        <h2>Key Features of C</h2>
        <ul>
          <li>Procedural & structured</li>
          <li>Portable</li>
          <li>Rich library support</li>
          <li>Pointer-based memory access</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Key features of C"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ADV & DISADV ===== */}
      <div className="topic-card success">
        <h2>Advantages of C</h2>
        <ul>
          <li>Very fast</li>
          <li>Low memory usage</li>
          <li>Hardware-level programming</li>
        </ul>
      </div>

      <div className="topic-card warning">
        <h2>Disadvantages of C</h2>
        <ul>
          <li>No garbage collection</li>
          <li>No built-in OOP</li>
          <li>Manual memory management</li>
        </ul>
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="topic-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ C is fast and powerful</li>
          <li>✔ Used at system level</li>
          <li>✔ Builds strong programming logic</li>
          <li>✔ Best language for beginners</li>
        </ul>
      </div>
    </section>
  );
}
