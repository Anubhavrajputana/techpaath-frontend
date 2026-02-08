import "./Advanced.css";

export default function JWTAuth() {
  return (
    <section className="advanced-page">
      <div className="advanced-hero">
        <h1>JWT Authentication</h1>
        <p>Secure user authentication using JSON Web Tokens</p>

        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee" alt="JWT Auth" />
      </div>

      <div className="advanced-card">
        <h2>What is JWT?</h2>
        <p>
          JWT (JSON Web Token) is a token-based authentication system used to
          securely transmit user information between client and server.
        </p>
      </div>

      <div className="advanced-card highlight">
        <h2>JWT Flow</h2>
        <ol>
          <li>User logs in</li>
          <li>Server creates JWT</li>
          <li>Token stored in browser</li>
          <li>Token sent with every request</li>
        </ol>
      </div>

      <div className="advanced-card">
        <h2>JWT Example (Node.js)</h2>
        <pre className="advanced-code">
{`const token = jwt.sign(
  { userId: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);`}
        </pre>
      </div>

      <div className="advanced-card success">
        <h2>Why JWT?</h2>
        <ul>
          <li>Stateless authentication</li>
          <li>Fast & scalable</li>
          <li>Industry standard</li>
        </ul>
      </div>
    </section>
  );
}
