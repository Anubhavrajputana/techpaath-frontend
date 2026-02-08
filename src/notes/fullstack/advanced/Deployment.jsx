import "./Advanced.css";

export default function Deployment() {
  return (
    <section className="advanced-page">
      <div className="advanced-hero">
        <h1>Deployment</h1>
        <p>Make your app live on the internet</p>

        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Deployment" />
      </div>

      <div className="advanced-card">
        <h2>Platforms</h2>
        <ul>
          <li>Vercel → Frontend</li>
          <li>Netlify → Static sites</li>
          <li>AWS → Full infrastructure</li>
        </ul>
      </div>

      <div className="advanced-card success">
        <h2>Real World</h2>
        <p>
          Every production app must be deployed securely with environment
          variables & CI/CD.
        </p>
      </div>
    </section>
  );
}
