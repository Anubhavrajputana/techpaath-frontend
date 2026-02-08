import TopicLayout from "../common/TopicLayout";

export default function MongoDB() {
  return (
    <TopicLayout
      title="MongoDB"
      subtitle="NoSQL Database for modern apps"
      image="https://images.unsplash.com/photo-1542831371-d531d36971e6"
    >
      <div className="topic-card">
        <h2>What is MongoDB?</h2>
        <p>Stores data in JSON-like documents.</p>
      </div>

      <div className="topic-card highlight">
        <h2>Document Example</h2>
        <pre className="code-block">
{`{
  "name": "Harsh",
  "age": 21
}`}
        </pre>
      </div>
    </TopicLayout>
  );
}
