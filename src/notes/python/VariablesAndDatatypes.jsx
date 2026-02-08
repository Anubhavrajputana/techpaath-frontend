import React from "react";
import "./VariablesAndDatatypes.css";

export default function VariablesAndDatatypes() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Variables & Data Types in <span>Python</span>
        </h1>
        <p>How Python stores and manages data in memory</p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Python variables"
          className="topic-hero-image"
          loading="lazy"
        />
      </div>

      {/* ===== WHAT IS VARIABLE ===== */}
      <div className="topic-card">
        <h2>What is a Variable?</h2>
        <p>
          A <strong>variable</strong> is a container used to store data in
          memory.
        </p>

        <ul>
          <li>No need to declare data type</li>
          <li>Variable created when value is assigned</li>
          <li>Type decided automatically</li>
        </ul>

        <pre className="code-block">
{`age = 21
name = "Harsh"
price = 99.99`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Variable assignment"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== NAMING RULES ===== */}
      <div className="topic-card highlight">
        <h2>Variable Naming Rules</h2>

        <ul>
          <li>✔ Must start with letter or underscore</li>
          <li>✔ Can contain letters, digits, underscore</li>
          <li>✔ Case-sensitive</li>
          <li>❌ Cannot start with digit</li>
          <li>❌ Cannot use keywords</li>
        </ul>

        <pre className="code-block">
{`# Valid
my_var = 10
_count = 5

# Invalid
2name = 20
class = 10`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Variable naming rules"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== MEMORY ALLOCATION ===== */}
      <div className="topic-card">
        <h2>Memory Allocation (Behind the Scene)</h2>
        <p>
          Python uses <strong>dynamic memory allocation</strong>.
        </p>

        <ul>
          <li>Variables store reference, not value</li>
          <li>Multiple variables can point to same object</li>
        </ul>

        <pre className="code-block">
{`x = 10
y = x
# Both x and y refer to same object`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Python memory allocation"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== DATA TYPES ===== */}
      <div className="topic-card highlight">
        <h2>Python Data Types</h2>

        <ul>
          <li><strong>int</strong> → Whole numbers</li>
          <li><strong>float</strong> → Decimal numbers</li>
          <li><strong>str</strong> → Text</li>
          <li><strong>bool</strong> → True / False</li>
          <li><strong>list</strong> → Ordered, mutable</li>
          <li><strong>tuple</strong> → Ordered, immutable</li>
          <li><strong>dict</strong> → Key-value pairs</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Python data types"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== TYPE CHECKING ===== */}
      <div className="topic-card">
        <h2>Type Checking</h2>
        <p>Use <code>type()</code> function to check data type.</p>

        <pre className="code-block">
{`x = 10
print(type(x))`}
        </pre>

        <p><strong>Output:</strong> &lt;class 'int'&gt;</p>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Type checking"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== TYPE CONVERSION ===== */}
      <div className="topic-card highlight">
        <h2>Type Conversion</h2>
        <p>Convert one data type to another.</p>

        <pre className="code-block">
{`x = "10"
y = int(x)`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
          alt="Type conversion"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== COMMON MISTAKES ===== */}
      <div className="topic-card">
        <h2>Common Mistakes</h2>
        <ul>
          <li>❌ Confusing "10" with 10</li>
          <li>❌ Wrong variable names</li>
          <li>❌ Assuming fixed data type</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Python mistakes"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card success">
        <h2>Real World Usage</h2>
        <ul>
          <li>Store user input</li>
          <li>Process data</li>
          <li>File handling</li>
          <li>Data analysis</li>
          <li>Machine learning</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Python real world usage"
          className="topic-image"
          loading="lazy"
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="topic-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ Variables store references</li>
          <li>✔ Python is dynamically typed</li>
          <li>✔ Multiple built-in data types</li>
          <li>✔ Essential for beginners</li>
        </ul>
      </div>
    </section>
  );
}
