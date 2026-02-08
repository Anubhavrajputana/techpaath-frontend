import React from "react";
import "./FileHandling.css";

export default function FileHandling() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          File Handling in <span>Python</span>
        </h1>
        <p>Store, read and manage data permanently using files</p>

        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          alt="File handling concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WHAT IS FILE HANDLING ===== */}
      <div className="topic-card">
        <h2>What is File Handling?</h2>
        <p>
          File handling allows Python programs to <strong>store data permanently</strong>
          on disk instead of temporary memory.
        </p>

        <ul>
          <li>Create files</li>
          <li>Read data from files</li>
          <li>Write data into files</li>
          <li>Append data to files</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Disk storage files"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== FILE OPERATIONS ===== */}
      <div className="topic-card highlight">
        <h2>File Operations in Python</h2>
        <ul>
          <li>Create</li>
          <li>Read</li>
          <li>Write</li>
          <li>Append</li>
          <li>Close</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="File operation flow"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== OPEN FILE ===== */}
      <div className="topic-card">
        <h2>Opening a File</h2>
        <pre className="code-block">
{`file = open("data.txt", "r")`}
        </pre>

        <p>
          <strong>Common Modes:</strong>
        </p>
        <ul>
          <li><code>r</code> → Read</li>
          <li><code>w</code> → Write</li>
          <li><code>a</code> → Append</li>
          <li><code>x</code> → Create</li>
          <li><code>rb / wb</code> → Binary mode</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Open file modes"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WRITE FILE ===== */}
      <div className="topic-card highlight">
        <h2>Writing to a File</h2>
        <pre className="code-block">
{`file = open("data.txt", "w")
file.write("Hello Python")
file.close()`}
        </pre>

        <p>
          ⚠ If file exists, content will be <strong>overwritten</strong>.
        </p>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Write file python"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== READ FILE ===== */}
      <div className="topic-card">
        <h2>Reading from a File</h2>
        <pre className="code-block">
{`file = open("data.txt", "r")
content = file.read()
print(content)
file.close()`}
        </pre>

        <p><strong>Output:</strong> Hello Python</p>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Read file python"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== APPEND ===== */}
      <div className="topic-card highlight">
        <h2>Appending to a File</h2>
        <pre className="code-block">
{`file = open("data.txt", "a")
file.write("\\nWelcome to File Handling")
file.close()`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Append data to file"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WITH STATEMENT ===== */}
      <div className="topic-card success">
        <h2>Using with Statement (Best Practice)</h2>
        <pre className="code-block">
{`with open("data.txt", "r") as file:
    print(file.read())`}
        </pre>

        <ul>
          <li>✔ File auto closed</li>
          <li>✔ Safer & cleaner</li>
          <li>✔ Recommended approach</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="With statement python"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== ERRORS ===== */}
      <div className="topic-card">
        <h2>Common Errors</h2>
        <ul>
          <li>❌ FileNotFoundError</li>
          <li>❌ PermissionError</li>
          <li>❌ Forgetting close()</li>
          <li>❌ Using wrong file mode</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="Python file errors"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card success">
        <h2>Real World Use Cases</h2>
        <ul>
          <li>Logging systems</li>
          <li>Configuration files</li>
          <li>Data analysis</li>
          <li>Backup systems</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Backend file usage"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="topic-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ open() → open file</li>
          <li>✔ read() / write() → file operations</li>
          <li>✔ append → add data</li>
          <li>✔ with → best practice</li>
        </ul>
      </div>
    </section>
  );
}
