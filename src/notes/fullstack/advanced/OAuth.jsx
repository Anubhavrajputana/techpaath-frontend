import "./Advanced.css";

export default function OAuth() {
  return (
    <section className="advanced-page">
      <div className="advanced-hero">
        <h1>OAuth 2.0 (Google Login)</h1>
        <p>Login using third-party providers securely</p>

        <img src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72" alt="OAuth Login" />
      </div>

      <div className="advanced-card">
        <h2>What is OAuth?</h2>
        <p>
          OAuth allows users to log in using Google, GitHub, Facebook
          without sharing passwords.
        </p>
      </div>

      <div className="advanced-card highlight">
        <h2>OAuth Flow</h2>
        <ol>
          <li>User clicks Google Login</li>
          <li>Google verifies user</li>
          <li>Token returned to backend</li>
          <li>User authenticated</li>
        </ol>
      </div>

      <div className="advanced-card">
        <h2>Use Cases</h2>
        <ul>
          <li>Google Sign-In</li>
          <li>GitHub Login</li>
          <li>Enterprise SSO</li>
        </ul>
      </div>
    </section>
  );
}
