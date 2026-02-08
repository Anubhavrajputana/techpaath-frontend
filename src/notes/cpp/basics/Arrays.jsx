import React from "react";
import "./Arrays.css";

export default function Arrays() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Arrays in <span>C++</span>
        </h1>
        <p>Store multiple values efficiently using contiguous memory</p>

        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          alt="Arrays concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS ARRAY ===== */}
      <div className="topic-card">
        <h2>What is an Array?</h2>
        <p>
          An <strong>array</strong> is a collection of similar data types stored
          in <strong>contiguous memory locations</strong>.
        </p>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Contiguous memory representation"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ARRAY EXAMPLE ===== */}
      <div className="topic-card highlight">
        <h2>Array Example</h2>
        <pre className="code-block">
{`int arr[5] = {1, 2, 3, 4, 5};`}
        </pre>

        <p>
          ✔ Stores 5 integers in continuous memory  
          <br />
          ✔ Accessed using index (0 to 4)
        </p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Array code example"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== MULTI DIMENSIONAL ===== */}
      <div className="topic-card">
        <h2>Multi-Dimensional Array</h2>
        <pre className="code-block">
{`int mat[2][2];`}
        </pre>

        <p>
          ✔ Stores data in row-column format  
          <br />
          ✔ Used for matrices and tables
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="2D array matrix"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== USES ===== */}
      <div className="topic-card success">
        <h2>Uses of Arrays</h2>
        <ul>
          <li>Store bulk data</li>
          <li>Fast data access</li>
          <li>Used in algorithms & data processing</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Bulk data storage"
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
          <strong>Q:</strong> Why are arrays efficient?
        </p>
        <p className="answer">
          ✔ Because elements are stored in contiguous memory locations.
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
          <li>✔ Arrays store similar data</li>
          <li>✔ Fast access using index</li>
          <li>✔ Used heavily in C++ programs</li>
        </ul>
      </div>
    </section>
  );
}
