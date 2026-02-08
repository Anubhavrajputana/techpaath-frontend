import "./JavaScript.css";

export default function JavaScript() {
  return (
    <section className="js-page">

      {/* HERO */}
      <div className="js-hero">
        <h1>JavaScript</h1>
        <p>The Brain of the Web — Dynamic, Interactive & Powerful</p>

        <img
          src="https://images.unsplash.com/photo-1627398242454-45a1465c2479"
          alt="JavaScript Programming"
        />
      </div>

      {/* WHAT IS JS */}
      <div className="js-card">
        <h2>What is JavaScript?</h2>
        <p>
          JavaScript is a high-level, interpreted programming language used to
          make web pages interactive and dynamic.
        </p>

        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="JavaScript Code"
        />
      </div>

      {/* FEATURES */}
      <div className="js-card">
        <h2>Key Features</h2>
        <ul>
          <li>Client-side scripting</li>
          <li>Event-driven</li>
          <li>Asynchronous</li>
          <li>Works with HTML & CSS</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Web Development"
        />
      </div>

      {/* VARIABLES */}
      <div className="js-card">
        <h2>Variables</h2>

        <pre className="code-block">
{`let name = "Harsh";
const age = 21;
var city = "Delhi";`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Variables"
        />
      </div>

      {/* DATA TYPES */}
      <div className="js-card">
        <h2>Data Types</h2>
        <ul>
          <li>String</li>
          <li>Number</li>
          <li>Boolean</li>
          <li>Object</li>
          <li>Array</li>
          <li>Undefined</li>
          <li>Null</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Data Types"
        />
      </div>

      {/* FUNCTIONS */}
      <div className="js-card">
        <h2>Functions</h2>

        <pre className="code-block">
{`function add(a, b) {
  return a + b;
}`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Functions"
        />
      </div>

      {/* ARROW FUNCTIONS */}
      <div className="js-card">
        <h2>Arrow Functions</h2>

        <pre className="code-block">
{`const add = (a, b) => a + b;`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Arrow Function"
        />
      </div>

      {/* CONDITIONALS */}
      <div className="js-card">
        <h2>Conditional Statements</h2>

        <pre className="code-block">
{`if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Conditions"
        />
      </div>

      {/* LOOPS */}
      <div className="js-card">
        <h2>Loops</h2>

        <pre className="code-block">
{`for (let i = 1; i <= 5; i++) {
  console.log(i);
}`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Loops"
        />
      </div>

      {/* ARRAYS */}
      <div className="js-card">
        <h2>Arrays</h2>

        <pre className="code-block">
{`const numbers = [1, 2, 3, 4];
numbers.push(5);`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Arrays"
        />
      </div>

      {/* OBJECTS */}
      <div className="js-card">
        <h2>Objects</h2>

        <pre className="code-block">
{`const user = {
  name: "Harsh",
  age: 21
};`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          alt="Objects"
        />
      </div>

      {/* DOM */}
      <div className="js-card">
        <h2>DOM Manipulation</h2>

        <pre className="code-block">
{`document.getElementById("title").innerText = "Hello JS";`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3"
          alt="DOM"
        />
      </div>

      {/* EVENTS */}
      <div className="js-card">
        <h2>Events</h2>

        <pre className="code-block">
{`button.addEventListener("click", () => {
  alert("Clicked");
});`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4"
          alt="Events"
        />
      </div>

      {/* ASYNC */}
      <div className="js-card">
        <h2>Async / Await</h2>

        <pre className="code-block">
{`async function fetchData() {
  const res = await fetch(url);
  const data = await res.json();
}`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          alt="Async JS"
        />
      </div>

      {/* REAL USE */}
      <div className="js-card highlight">
        <h2>Real World Usage</h2>
        <ul>
          <li>Frontend development</li>
          <li>Backend (Node.js)</li>
          <li>Mobile apps</li>
          <li>Games</li>
          <li>APIs</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <div className="js-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ Core web language</li>
          <li>✔ Makes pages interactive</li>
          <li>✔ Mandatory for Full Stack</li>
        </ul>
      </div>

    </section>
  );
}
