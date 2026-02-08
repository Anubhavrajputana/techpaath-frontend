import "./Advanced.css";

export default function CICD() {
  return (
    <section className="advanced-page">
      <div className="advanced-hero">
        <h1>CI / CD</h1>
        <p>Automated build, test & deployment</p>

        <img src="https://images.unsplash.com/photo-1581090700227-1e37b190418e" alt="CI CD" />
      </div>

      <div className="advanced-card">
        <h2>CI/CD Pipeline</h2>
        <ol>
          <li>Code pushed</li>
          <li>Tests run</li>
          <li>Build created</li>
          <li>App deployed</li>
        </ol>
      </div>
    </section>
  );
}
