import React from "react";
import "./FileHandling.css";

export default function FileHandling() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          File Handling in <span>C</span>
        </h1>
        <p>Store and manage data permanently using files</p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="File handling concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WHAT IS FILE HANDLING ===== */}
      <div className="topic-card">
        <h2>What is File Handling?</h2>
        <p>
          File handling allows data to be stored permanently in files,
          instead of temporary memory (RAM).
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Permanent data storage"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== FILE OPERATIONS ===== */}
      <div className="topic-card">
        <h2>File Operations</h2>
        <ul>
          <li>Create</li>
          <li>Read</li>
          <li>Write</li>
          <li>Append</li>
          <li>Close</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="File operations workflow"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== FILE POINTER ===== */}
      <div className="topic-card highlight">
        <h2>File Pointer</h2>
        <pre className="code-block">{`FILE *fp;`}</pre>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="File pointer in C"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== OPEN FILE ===== */}
      <div className="topic-card">
        <h2>Opening a File</h2>
        <pre className="code-block">
{`fp = fopen("data.txt", "w");`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
          alt="Opening file in C"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== FILE MODES ===== */}
      <div className="topic-card">
        <h2>File Modes</h2>
        <ul>
          <li><strong>r</strong> → read</li>
          <li><strong>w</strong> → write</li>
          <li><strong>a</strong> → append</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="File modes concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== WRITE DATA ===== */}
      <div className="topic-card">
        <h2>Writing Data to File</h2>
        <pre className="code-block">
{`fprintf(fp, "Hello");`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Writing data to file"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== READ DATA ===== */}
      <div className="topic-card">
        <h2>Reading Data from File</h2>
        <pre className="code-block">
{`fscanf(fp, "%s", str);`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Reading data from file"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== CLOSE FILE ===== */}
      <div className="topic-card">
        <h2>Closing a File</h2>
        <pre className="code-block">{`fclose(fp);`}</pre>

        <img
          src="https://images.unsplash.com/photo-1600267165607-8f6c4e7b8cfa"
          alt="Closing file"
          className="topic-image"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
        />
      </div>

      {/* ===== REAL USE ===== */}
      <div className="topic-card">
        <h2>Real World Uses</h2>
        <ul>
          <li>Logs</li>
          <li>Reports</li>
          <li>Databases</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
          alt="Logs and reports"
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
          <li>✔ Permanent storage of data</li>
          <li>✔ Very useful in real-world projects</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="File handling summary"
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
