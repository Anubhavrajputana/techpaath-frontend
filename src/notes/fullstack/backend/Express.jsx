import "./Express.css";

export default function Express() {
  return (
    <section className="express-page">
      {/* HERO */}
      <div className="express-hero">
        <h1>Express.js</h1>
        <p>Fast, minimal & flexible Node.js web framework</p>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Express Backend"
        />
      </div>

      {/* WHAT IS EXPRESS */}
      <div className="express-card">
        <h2>What is Express.js?</h2>
        <p>
          Express.js is a lightweight web framework for Node.js used to build
          REST APIs and backend applications.
        </p>

        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="Backend API"
        />
      </div>

      {/* WHY EXPRESS */}
      <div className="express-card">
        <h2>Why Use Express?</h2>
        <ul>
          <li>Minimal & fast</li>
          <li>Easy routing</li>
          <li>Middleware support</li>
          <li>Used with MongoDB, MySQL</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Server Code"
        />
      </div>

      {/* INSTALLATION */}
      <div className="express-card">
        <h2>Installation</h2>

        <pre className="code-block">
{`npm install express`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="NPM Install"
        />
      </div>

      {/* BASIC SERVER */}
      <div className="express-card">
        <h2>Basic Express Server</h2>

        <pre className="code-block">
{`const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3000, () => {
  console.log("Server running");
});`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Express Server"
        />
      </div>

      {/* ROUTING */}
      <div className="express-card">
        <h2>Routing in Express</h2>
        <p>Routing defines how an app responds to client requests.</p>

        <pre className="code-block">
{`app.get("/users", (req, res) => {
  res.send("User List");
});`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Routing"
        />
      </div>

      {/* MIDDLEWARE */}
      <div className="express-card">
        <h2>Middleware</h2>
        <p>
          Middleware functions execute between request and response.
        </p>

        <pre className="code-block">
{`app.use((req, res, next) => {
  console.log("Middleware executed");
  next();
});`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Middleware"
        />
      </div>

      {/* REST API */}
      <div className="express-card">
        <h2>REST API Example</h2>

        <pre className="code-block">
{`app.post("/login", (req, res) => {
  res.json({ success: true });
});`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="REST API"
        />
      </div>

      {/* REAL USE */}
      <div className="express-card highlight">
        <h2>Real World Usage</h2>
        <ul>
          <li>Authentication APIs</li>
          <li>Payment gateways</li>
          <li>Admin dashboards</li>
          <li>Mobile app backend</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <div className="express-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ Built on Node.js</li>
          <li>✔ Used for backend APIs</li>
          <li>✔ Industry standard</li>
          <li>✔ Must-know for Full Stack</li>
        </ul>
      </div>
    </section>
  );
}
