import "./SQL.css";

export default function SQL() {
  return (
    <section className="sql-page">

      {/* HERO */}
      <div className="sql-hero">
        <h1>SQL (Structured Query Language)</h1>
        <p>The language to store, retrieve & manage data</p>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="SQL Database"
        />
      </div>

      {/* WHAT IS SQL */}
      <div className="sql-card">
        <h2>What is SQL?</h2>
        <p>
          SQL (Structured Query Language) is used to communicate with databases.
          It allows us to create, read, update, and delete data stored in tables.
        </p>

        <img
          src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d"
          alt="Database tables"
        />
      </div>

      {/* DATABASE */}
      <div className="sql-card">
        <h2>What is a Database?</h2>
        <p>
          A database is an organized collection of data stored in tables.
          Each table consists of rows (records) and columns (fields).
        </p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="Database structure"
        />
      </div>

      {/* SQL COMMAND TYPES */}
      <div className="sql-card">
        <h2>Types of SQL Commands</h2>
        <ul>
          <li><strong>DDL</strong> – Data Definition Language</li>
          <li><strong>DML</strong> – Data Manipulation Language</li>
          <li><strong>DQL</strong> – Data Query Language</li>
          <li><strong>DCL</strong> – Data Control Language</li>
          <li><strong>TCL</strong> – Transaction Control Language</li>
        </ul>
      </div>

      {/* CREATE TABLE */}
      <div className="sql-card">
        <h2>CREATE TABLE</h2>

        <pre className="code-block">
{`CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  marks INT
);`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Create table"
        />
      </div>

      {/* INSERT */}
      <div className="sql-card">
        <h2>INSERT Data</h2>

        <pre className="code-block">
{`INSERT INTO students VALUES (1, 'Harsh', 85);`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Insert data"
        />
      </div>

      {/* SELECT */}
      <div className="sql-card">
        <h2>SELECT Query</h2>

        <pre className="code-block">
{`SELECT * FROM students;`}
        </pre>

        <pre className="code-block">
{`SELECT name, marks FROM students WHERE marks > 80;`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Select query"
        />
      </div>

      {/* WHERE */}
      <div className="sql-card">
        <h2>WHERE Clause</h2>

        <pre className="code-block">
{`SELECT * FROM students WHERE name = 'Harsh';`}
        </pre>
      </div>

      {/* UPDATE */}
      <div className="sql-card">
        <h2>UPDATE Data</h2>

        <pre className="code-block">
{`UPDATE students SET marks = 90 WHERE id = 1;`}
        </pre>
      </div>

      {/* DELETE */}
      <div className="sql-card">
        <h2>DELETE Data</h2>

        <pre className="code-block">
{`DELETE FROM students WHERE id = 1;`}
        </pre>
      </div>

      {/* KEYS */}
      <div className="sql-card">
        <h2>Keys in SQL</h2>
        <ul>
          <li>Primary Key</li>
          <li>Foreign Key</li>
          <li>Unique Key</li>
          <li>Composite Key</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Primary foreign key"
        />
      </div>

      {/* JOINS */}
      <div className="sql-card">
        <h2>JOINS</h2>

        <pre className="code-block">
{`SELECT s.name, m.marks
FROM students s
INNER JOIN marks m
ON s.id = m.student_id;`}
        </pre>

        <p>Types of Joins:</p>
        <ul>
          <li>INNER JOIN</li>
          <li>LEFT JOIN</li>
          <li>RIGHT JOIN</li>
          <li>FULL JOIN</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="SQL joins"
        />
      </div>

      {/* AGGREGATE */}
      <div className="sql-card">
        <h2>Aggregate Functions</h2>

        <pre className="code-block">
{`SELECT COUNT(*), AVG(marks), MAX(marks) FROM students;`}
        </pre>

        <ul>
          <li>COUNT()</li>
          <li>SUM()</li>
          <li>AVG()</li>
          <li>MIN()</li>
          <li>MAX()</li>
        </ul>
      </div>

      {/* GROUP BY */}
      <div className="sql-card">
        <h2>GROUP BY & HAVING</h2>

        <pre className="code-block">
{`SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 50000;`}
        </pre>
      </div>

      {/* INDEX */}
      <div className="sql-card">
        <h2>Indexes</h2>
        <p>
          Indexes improve the speed of data retrieval.
        </p>

        <pre className="code-block">
{`CREATE INDEX idx_name ON students(name);`}
        </pre>
      </div>

      {/* NORMALIZATION */}
      <div className="sql-card">
        <h2>Normalization</h2>
        <ul>
          <li>1NF – Atomic values</li>
          <li>2NF – No partial dependency</li>
          <li>3NF – No transitive dependency</li>
        </ul>
      </div>

      {/* TRANSACTIONS */}
      <div className="sql-card">
        <h2>Transactions</h2>

        <pre className="code-block">
{`BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;`}
        </pre>

        <ul>
          <li>COMMIT</li>
          <li>ROLLBACK</li>
          <li>SAVEPOINT</li>
        </ul>
      </div>

      {/* REAL USE */}
      <div className="sql-card highlight">
        <h2>Real World Usage</h2>
        <ul>
          <li>User authentication</li>
          <li>E-commerce orders</li>
          <li>Banking systems</li>
          <li>Analytics & reports</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <div className="sql-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ SQL manages structured data</li>
          <li>✔ Core backend skill</li>
          <li>✔ Mandatory for Full Stack</li>
        </ul>
      </div>

    </section>
  );
}
