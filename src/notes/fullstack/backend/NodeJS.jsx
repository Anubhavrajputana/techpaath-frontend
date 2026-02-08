import TopicLayout from "../common/TopicLayout";

export default function NodeJS() {
  return (
    <TopicLayout
      title="Node.js & Express"
      subtitle="Backend using JavaScript"
      image="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
    >
      <div className="topic-card">
        <h2>What is Node.js?</h2>
        <p>Run JavaScript on the server.</p>
      </div>

      <div className="topic-card highlight">
        <h2>Express API Example</h2>
        <pre className="code-block">
{`app.get("/api", (req, res) => {
  res.send("Hello API");
});`}
        </pre>
      </div>

      <div className="topic-card success">
        <h2>Real World</h2>
        <p>Used by Netflix, Uber, PayPal.</p>
      </div>
    </TopicLayout>
  );
}
