import TopicLayout from "../common/TopicLayout";

export default function HTML() {
  return (
    <TopicLayout
      title="HTML (HyperText Markup Language)"
      subtitle="The foundation of every website"
      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    >
      <div className="topic-card">
        <h2>What is HTML?</h2>
        <p>
          HTML is used to create the <strong>structure</strong> of web pages.
        </p>
        <ul>
          <li>Defines headings, paragraphs, images</li>
          <li>Not a programming language</li>
          <li>Runs in browser</li>
        </ul>
      </div>

      <div className="topic-card highlight">
        <h2>Basic HTML Page</h2>
        <pre className="code-block">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`}
        </pre>
      </div>

      <div className="topic-card success">
        <h2>Real World Usage</h2>
        <p>
          Every website — Google, Facebook, Amazon — starts with HTML.
        </p>
      </div>
    </TopicLayout>
  );
}
