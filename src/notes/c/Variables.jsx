import React from "react";
import "./Variables.css";

export default function Variables() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Variables & Data Types in <span>C</span>
        </h1>
        <p>Storing data efficiently using memory and data types</p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Memory and variables concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS VARIABLE ===== */}
      <div className="topic-card">
        <h2>What is a Variable?</h2>
        <p>
          A <strong>variable</strong> is a named memory location used to store
          data during program execution.
        </p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Variable memory storage"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== IMPORTANCE ===== */}
      <div className="topic-card">
        <h2>Why Variables are Important?</h2>
        <ul>
          <li>Store data</li>
          <li>Manipulate values</li>
          <li>Perform calculations</li>
          <li>Control program logic</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Data manipulation"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== SYNTAX ===== */}
      <div className="topic-card highlight">
        <h2>Syntax of Variable</h2>
        <pre className="code-block">
{`datatype variableName;

int age;`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="Variable syntax"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INITIALIZATION ===== */}
      <div className="topic-card">
        <h2>Variable Initialization</h2>
        <pre className="code-block">
{`int age = 20;`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Variable initialization"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== MEMORY CONCEPT ===== */}
      <div className="topic-card">
        <h2>Memory Concept</h2>
        <p>
          Variable → <strong>Memory Address</strong> → <strong>Value</strong>
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Memory address concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== NAMING RULES ===== */}
      <div className="topic-card warning">
        <h2>Rules for Naming Variables</h2>
        <ul>
          <li>Must start with letter or underscore (_)</li>
          <li>No spaces allowed</li>
          <li>No special symbols</li>
          <li>Cannot be C keywords</li>
        </ul>

        <p>
          <strong>Valid:</strong> age, total_marks, _count <br />
          <strong>Invalid:</strong> 1age, total marks, @value
        </p>

        <img
          src="https://images.unsplash.com/photo-1600267165607-8f6c4e7b8cfa"
          alt="Variable naming rules"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DATA TYPES ===== */}
      <div className="topic-card">
        <h2>Data Types in C</h2>
        <ul>
          <li><strong>int</strong> → integers</li>
          <li><strong>float</strong> → decimal numbers</li>
          <li><strong>double</strong> → high precision decimals</li>
          <li><strong>char</strong> → single character</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="C data types"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DATA TYPE EXAMPLES ===== */}
      <div className="topic-card">
        <h2>Data Type Examples</h2>
        <pre className="code-block">
{`int age = 21;
float price = 99.50;
double distance = 12345.6789;
char grade = 'A';`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Data type examples"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DRY RUN ===== */}
      <div className="topic-card highlight">
        <h2>Dry Run Example</h2>
        <pre className="code-block">
{`int a = 10;
int b = 20;
int sum = a + b;`}
        </pre>

        <p>
          a = 10 <br />
          b = 20 <br />
          sum = 30
        </p>

        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="Dry run explanation"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== SIZE ===== */}
      <div className="topic-card">
        <h2>Size of Data Types</h2>
        <ul>
          <li>int → 4 bytes</li>
          <li>float → 4 bytes</li>
          <li>double → 8 bytes</li>
          <li>char → 1 byte</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
          alt="Memory size concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== TYPE CONVERSION ===== */}
      <div className="topic-card">
        <h2>Type Conversion</h2>
        <p>
          <strong>Implicit:</strong> int → float automatically <br />
          <strong>Explicit:</strong> (float)a
        </p>

        <img
          src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
          alt="Type conversion"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== COMMON MISTAKES ===== */}
      <div className="topic-card warning">
        <h2>Common Mistakes</h2>
        <ul>
          <li>Using uninitialized variables</li>
          <li>Wrong data type selection</li>
          <li>Overflow errors</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1600267165607-8f6c4e7b8cfa"
          alt="Programming mistakes"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card">
        <h2>Real World Examples</h2>
        <ul>
          <li>Bank balance</li>
          <li>Temperature</li>
          <li>Marks</li>
          <li>Product price</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Real world data examples"
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
          <li>✔ Variables store data</li>
          <li>✔ Data types define size & type</li>
          <li>✔ Memory-efficient programming</li>
          <li>✔ Important for logic building</li>
        </ul>
      </div>
    </section>
  );
}
