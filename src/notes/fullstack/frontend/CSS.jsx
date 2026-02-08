import TopicLayout from "../common/TopicLayout";

export default function CSS() {
  return (
    <TopicLayout
      title="CSS (Cascading Style Sheets)"
      subtitle="Make websites beautiful & responsive"
      image="https://images.unsplash.com/photo-1508780709619-79562169bc64"
    >
      <div className="topic-card">
        <h2>What is CSS?</h2>
        <p>CSS styles HTML elements.</p>
      </div>

      <div className="topic-card highlight">
        <h2>Example</h2>
        <pre className="code-block">
{`h1 {
  color: cyan;
  text-align: center;
}`}
        </pre>
      </div>

      <div className="topic-card success">
        <h2>Advanced CSS</h2>
        <ul>
          <li>Flexbox</li>
          <li>Grid</li>
          <li>Animations</li>
          <li>Glassmorphism</li>
        </ul>
      </div>
    </TopicLayout>
  );
}
