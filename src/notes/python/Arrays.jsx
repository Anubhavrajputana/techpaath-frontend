import React from "react";
import "./Arrays.css";

export default function Arrays() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Lists (Arrays) in <span>Python</span>
        </h1>
        <p>Store multiple values in a single variable efficiently</p>

        <img
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
          alt="Python list concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WHAT IS LIST ===== */}
      <div className="topic-card">
        <h2>What is a List?</h2>
        <p>
          A <strong>list</strong> in Python is a collection used to store multiple
          values in a single variable.
        </p>

        <ul>
          <li>Ordered</li>
          <li>Mutable (can be changed)</li>
          <li>Allows duplicate values</li>
          <li>Indexed (starts from 0)</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Python list memory representation"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== CREATING LIST ===== */}
      <div className="topic-card highlight">
        <h2>Creating a List</h2>
        <pre className="code-block">
{`numbers = [1, 2, 3, 4]`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Creating list in Python"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== ACCESSING ELEMENTS ===== */}
      <div className="topic-card">
        <h2>Accessing List Elements</h2>
        <pre className="code-block">
{`numbers = [1, 2, 3, 4]
print(numbers[0])   # Output: 1`}
        </pre>

        <p>Index always starts from <strong>0</strong>.</p>

        <img
          src="https://images.unsplash.com/photo-1509223197845-458d87318791"
          alt="Index based access"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== NEGATIVE INDEXING ===== */}
      <div className="topic-card highlight">
        <h2>Negative Indexing</h2>
        <pre className="code-block">
{`numbers = [10, 20, 30, 40]
print(numbers[-1])   # Output: 40`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="Negative indexing concept"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== MODIFYING LIST ===== */}
      <div className="topic-card">
        <h2>Modifying List Elements</h2>
        <pre className="code-block">
{`numbers = [1, 2, 3]
numbers[1] = 99
print(numbers)`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="List modification"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== ADDING ELEMENTS ===== */}
      <div className="topic-card highlight">
        <h2>Adding Elements (append)</h2>
        <pre className="code-block">
{`numbers = [1, 2]
numbers.append(3)
print(numbers)`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Append in list"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== REMOVING ELEMENTS ===== */}
      <div className="topic-card">
        <h2>Removing Elements (remove)</h2>
        <pre className="code-block">
{`numbers = [1, 2, 3]
numbers.remove(2)
print(numbers)`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Remove element from list"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== LOOPING ===== */}
      <div className="topic-card highlight">
        <h2>Looping Through a List</h2>
        <pre className="code-block">
{`numbers = [1, 2, 3]
for num in numbers:
    print(num)`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Looping through list"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== LENGTH ===== */}
      <div className="topic-card">
        <h2>List Length</h2>
        <pre className="code-block">
{`numbers = [1, 2, 3, 4]
print(len(numbers))`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Length of list"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== REAL WORLD ===== */}
      <div className="topic-card success">
        <h2>Real World Use Cases</h2>
        <ul>
          <li>Storing user data</li>
          <li>Data analysis</li>
          <li>Machine learning datasets</li>
          <li>Automation scripts</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Python data analysis"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="topic-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ Lists store multiple values</li>
          <li>✔ Index starts from 0</li>
          <li>✔ Lists are mutable</li>
          <li>✔ Very important for interviews</li>
        </ul>
      </div>
    </section>
  );
}
