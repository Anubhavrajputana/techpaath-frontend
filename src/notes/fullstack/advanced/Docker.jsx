import "./Advanced.css";

export default function Docker() {
  return (
    <section className="advanced-page">
      <div className="advanced-hero">
        <h1>Docker</h1>
        <p>Containerize applications for consistency</p>

        <img src="https://images.unsplash.com/photo-1605745341112-85968b19335b" alt="Docker" />
      </div>

      <div className="advanced-card">
        <h2>Why Docker?</h2>
        <ul>
          <li>Same app everywhere</li>
          <li>No dependency issues</li>
          <li>Easy deployment</li>
        </ul>
      </div>

      <div className="advanced-card highlight">
        <h2>Dockerfile Example</h2>
        <pre className="advanced-code">
{`FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm","start"]`}
        </pre>
      </div>
    </section>
  );
}
