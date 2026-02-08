import "./Advanced.css";

export default function Security() {
  return (
    <section className="advanced-page">
      <div className="advanced-hero">
        <h1>Web Security</h1>
        <p>XSS, CSRF & secure coding practices</p>

        <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87" alt="Web Security" />
      </div>

      <div className="advanced-card">
        <h2>XSS (Cross-Site Scripting)</h2>
        <p>
          Attackers inject malicious JavaScript into websites.
        </p>
      </div>

      <div className="advanced-card">
        <h2>CSRF</h2>
        <p>
          Tricks authenticated users into performing unwanted actions.
        </p>
      </div>

      <div className="advanced-card success">
        <h2>Prevention</h2>
        <ul>
          <li>Input sanitization</li>
          <li>HTTP-only cookies</li>
          <li>CSRF tokens</li>
        </ul>
      </div>
    </section>
  );
}
