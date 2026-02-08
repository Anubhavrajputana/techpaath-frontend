import React from "react";
import "./Arrays.css";

export default function Arrays() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Arrays in <span>C</span>
        </h1>
        <p>Store multiple values efficiently in contiguous memory</p>

        {/* Programming + data visualization */}
        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Array data structure concept"
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
          An array is a collection of similar data types stored in
          <strong> contiguous memory locations</strong>.
        </p>

        {/* Memory blocks / data */}
        <img
          src="https://images.unsplash.com/photo-1581091215367-59ab6b5f5d6a"
          alt="Contiguous memory blocks"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DECLARATION ===== */}
      <div className="topic-card">
        <h2>Declaration</h2>
        <pre className="code-block">{`int arr[5];`}</pre>

        {/* Code editor */}
        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="C code array declaration"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== INITIALIZATION ===== */}
      <div className="topic-card">
        <h2>Initialization</h2>
        <pre className="code-block">
{`int arr[5] = {1, 2, 3, 4, 5};`}
        </pre>

        {/* Code with values */}
        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Array initialization with values"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ACCESSING ===== */}
      <div className="topic-card">
        <h2>Accessing Elements</h2>
        <pre className="code-block">
{`arr[0];   // first element`}
        </pre>
        <p>
          Array index always starts from <strong>0</strong>.
        </p>

        {/* Indexing / numbers */}
        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="Index based access"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== MEMORY ===== */}
      <div className="topic-card highlight">
        <h2>Array Memory</h2>
        <p>
          All elements are stored in contiguous memory locations,
          which allows fast access.
        </p>

        {/* Memory / hardware */}
        <img
          src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
          alt="Computer memory representation"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== 2D ARRAY ===== */}
      <div className="topic-card">
        <h2>2D Array</h2>
        <pre className="code-block">{`int matrix[2][2];`}</pre>

        {/* Matrix / grid */}
        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Matrix grid representation"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== DRY RUN ===== */}
      <div className="topic-card">
        <h2>Dry Run</h2>
        <pre className="code-block">
{`arr = {10, 20, 30}
arr[1] = 20`}
        </pre>

        {/* Step-by-step logic */}
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Step by step execution"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== USE CASES ===== */}
      <div className="topic-card">
        <h2>Real Life Uses</h2>
        <ul>
          <li>Marks of students</li>
          <li>Scores in games</li>
          <li>Bulk data storage</li>
        </ul>

        {/* Data / analytics */}
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Data storage and analytics"
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
          <li>✔ Stores multiple values</li>
          <li>✔ Fast access using index</li>
          <li>✔ Widely used in data processing</li>
        </ul>

        {/* Structured data */}
        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Structured data concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>
    </section>
  );
}
