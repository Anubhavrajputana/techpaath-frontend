import TopicLayout from "../common/TopicLayout";

export default function ReactJS() {
  return (
    <TopicLayout
      title="React.js"
      subtitle="Build fast, component-based UIs"
      image="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
    >
      <div className="topic-card">
        <h2>Why React?</h2>
        <ul>
          <li>Component-based</li>
          <li>Fast Virtual DOM</li>
          <li>Reusable UI</li>
        </ul>
      </div>

      <div className="topic-card highlight">
        <h2>Component Example</h2>
        <pre className="code-block">
{`function Button() {
  return <button>Click</button>;
}`}
        </pre>
      </div>

      <div className="topic-card success">
        <h2>Advanced Topics</h2>
        <ul>
          <li>Hooks</li>
          <li>Context API</li>
          <li>Redux</li>
          <li>Performance optimization</li>
        </ul>
      </div>
    </TopicLayout>
  );
}
