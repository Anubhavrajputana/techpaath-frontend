import React from "react";
import "./STL.css";

export default function STL() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          STL in <span>C++</span>
        </h1>
        <p>Powerful library for fast and efficient programming</p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="C++ STL overview"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS STL ===== */}
      <div className="topic-card">
        <h2>What is STL?</h2>
        <p>
          <strong>STL (Standard Template Library)</strong> is a collection of
          reusable C++ template classes and functions that provide
          ready-made solutions for common programming tasks.
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Reusable components in programming"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== COMPONENTS ===== */}
      <div className="topic-card highlight">
        <h2>Main Components of STL</h2>
        <ul>
          <li>
            <strong>Containers</strong> – store data (vector, map, set)
          </li>
          <li>
            <strong>Algorithms</strong> – operations on data (sort, search)
          </li>
          <li>
            <strong>Iterators</strong> – access container elements
          </li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="STL components diagram"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== CONTAINERS ===== */}
      <div className="topic-card">
        <h2>Containers</h2>
        <p>
          Containers are data structures that store objects and manage memory
          automatically.
        </p>
        <ul>
          <li>vector</li>
          <li>map</li>
          <li>set</li>
          <li>list</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Containers storing data"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ALGORITHMS ===== */}
      <div className="topic-card">
        <h2>Algorithms</h2>
        <p>
          Algorithms perform operations like sorting, searching, counting, etc.
        </p>
        <ul>
          <li>sort()</li>
          <li>find()</li>
          <li>count()</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="STL algorithms"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ITERATORS ===== */}
      <div className="topic-card">
        <h2>Iterators</h2>
        <p>
          Iterators act like pointers and are used to traverse elements of
          containers.
        </p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Iterators traversal"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== EXAMPLE ===== */}
      <div className="topic-card highlight">
        <h2>Example using vector</h2>
        <pre className="code-block">
{`vector<int> v;
v.push_back(10);`}
        </pre>

        <p>
          ✔ <strong>vector</strong> dynamically resizes <br />
          ✔ <strong>push_back()</strong> inserts element at end
        </p>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Vector example in STL"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== ADVANTAGES ===== */}
      <div className="topic-card success">
        <h2>Advantages of STL</h2>
        <ul>
          <li>✔ Faster development</li>
          <li>✔ Optimized performance</li>
          <li>✔ Reusable and reliable code</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Efficient programming"
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
          <strong>Q:</strong> What are the main components of STL?
        </p>
        <p className="answer">
          ✔ Containers, Algorithms and Iterators
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
          <li>✔ STL simplifies coding</li>
          <li>✔ Provides ready-made data structures</li>
          <li>✔ Very important for competitive programming</li>
        </ul>
      </div>
    </section>
  );
}
