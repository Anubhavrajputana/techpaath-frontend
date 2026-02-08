import React from "react";
import "./MemoryManagement.css";

export default function MemoryManagement() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Memory Management in <span>C++</span>
        </h1>
        <p>Dynamic allocation and deallocation using new and delete</p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Memory management concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS MEMORY MANAGEMENT ===== */}
      <div className="topic-card">
        <h2>What is Memory Management?</h2>
        <p>
          <strong>Memory management</strong> refers to the process of allocating
          and deallocating memory dynamically during program execution.
        </p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Dynamic memory concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== KEYWORDS ===== */}
      <div className="topic-card highlight">
        <h2>Important Keywords</h2>
        <ul>
          <li>
            <strong>new</strong> → Allocates memory dynamically
          </li>
          <li>
            <strong>delete</strong> → Frees allocated memory
          </li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="New and delete keywords"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card">
        <h2>Example</h2>
        <pre className="code-block">
{`int *p = new int;
delete p;`}
        </pre>

        <p>
          ✔ <strong>new</strong> allocates memory <br />
          ✔ <strong>delete</strong> releases memory
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Dynamic memory example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== MEMORY LEAK ===== */}
      <div className="topic-card warning">
        <h2>Memory Leak</h2>
        <p>
          A <strong>memory leak</strong> occurs when allocated memory is not
          released, leading to wastage of system resources.
        </p>

        <p>
          👉 Always free memory using <strong>delete</strong>.
        </p>

        <img
          src="https://images.unsplash.com/photo-1600267165607-8f6c4e7b8cfa"
          alt="Memory leak problem"
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
          <strong>Q:</strong> Why should we use delete in C++?
        </p>
        <p className="answer">
          ✔ To avoid memory leaks and free unused memory.
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
          <li>✔ new allocates memory</li>
          <li>✔ delete frees memory</li>
          <li>✔ Prevents memory leaks</li>
        </ul>
      </div>
    </section>
  );
}
