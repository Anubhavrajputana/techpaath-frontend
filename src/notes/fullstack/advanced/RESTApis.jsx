import "./Advanced.css";

export default function RESTApis() {
  return (
    <section className="advanced-page">
      <div className="advanced-hero">
        <h1>REST APIs</h1>
        <p>Backend communication standard for web & mobile apps</p>

        <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" alt="REST API" />
      </div>

      <div className="advanced-card">
        <h2>What is REST?</h2>
        <p>
          REST is an architectural style used to build scalable APIs
          using HTTP methods.
        </p>
      </div>

      <div className="advanced-card highlight">
        <h2>HTTP Methods</h2>
        <ul>
          <li>GET → Fetch data</li>
          <li>POST → Create data</li>
          <li>PUT → Update data</li>
          <li>DELETE → Remove data</li>
        </ul>
      </div>

      <div className="advanced-card">
        <h2>Example API</h2>
        <pre className="advanced-code">
{`app.get("/users", (req, res) => {
  res.json(users);
});`}
        </pre>
      </div>
    </section>
  );
}
