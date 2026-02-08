import React from "react";
import "./OOP.css";

export default function OOP() {
  return (
    <section className="topic-page">
      {/* ===== HERO ===== */}
      <div className="topic-hero">
        <h1>
          Object Oriented Programming <span>(OOP)</span> in Python
        </h1>
        <p>Organize code using classes and objects</p>

        <img
          src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a"
          alt="OOP concept"
          className="topic-hero-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== WHAT IS OOP ===== */}
      <div className="topic-card">
        <h2>What is Object-Oriented Programming?</h2>
        <p>
          <strong>OOP</strong> is a programming paradigm that organizes code
          using <strong>objects</strong> and <strong>classes</strong>.
        </p>

        <ul>
          <li>Organizes large programs</li>
          <li>Encourages code reuse</li>
          <li>Improves readability</li>
          <li>Builds scalable software</li>
        </ul>

        <p>Python fully supports OOP concepts.</p>

        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
          alt="OOP overview"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== CLASS & OBJECT ===== */}
      <div className="topic-card highlight">
        <h2>1️⃣ Class and Object</h2>

        <ul>
          <li>
            <strong>Class</strong> → Blueprint or template
          </li>
          <li>
            <strong>Object</strong> → Instance of class
          </li>
        </ul>

        <pre className="code-block">
{`class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(self.name, self.age)

s1 = Student("Harsh", 21)
s1.display()`}
        </pre>

        <ul>
          <li><code>__init__()</code> → constructor</li>
          <li><code>self</code> → current object</li>
          <li><code>s1</code> → object of Student</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Class and object"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== INHERITANCE ===== */}
      <div className="topic-card highlight">
        <h2>2️⃣ Inheritance</h2>
        <p>
          Inheritance allows one class to acquire properties and methods of
          another class.
        </p>

        <ul>
          <li>Code reusability</li>
          <li>Easy maintenance</li>
          <li>Logical class hierarchy</li>
        </ul>

        <pre className="code-block">
{`class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

d = Dog()
d.speak()
d.bark()`}
        </pre>

        <img
          src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
          alt="Inheritance"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== ENCAPSULATION ===== */}
      <div className="topic-card">
        <h2>3️⃣ Encapsulation</h2>
        <p>
          Encapsulation means binding data and methods together and restricting
          direct access to data.
        </p>

        <pre className="code-block">
{`class Bank:
    def __init__(self):
        self.__balance = 0

    def deposit(self, amount):
        self.__balance += amount

    def getBalance(self):
        return self.__balance`}
        </pre>

        <ul>
          <li><code>__balance</code> → private variable</li>
          <li>Accessed only via methods</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Encapsulation"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== POLYMORPHISM ===== */}
      <div className="topic-card highlight">
        <h2>4️⃣ Polymorphism</h2>
        <p>
          Polymorphism means <strong>"one name, many forms"</strong>.
        </p>

        <pre className="code-block">
{`class Bird:
    def sound(self):
        print("Bird sound")

class Crow(Bird):
    def sound(self):
        print("Caw Caw")

b = Crow()
b.sound()`}
        </pre>

        <ul>
          <li>Same method → different behavior</li>
          <li>Runtime method overriding</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
          alt="Polymorphism"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== IMPORTANCE ===== */}
      <div className="topic-card">
        <h2>Why OOP is Important?</h2>
        <ul>
          <li>Real-world problem modeling</li>
          <li>Reusable & maintainable code</li>
          <li>Used in frameworks & libraries</li>
          <li>Very important for interviews</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
          alt="Software design"
          className="topic-image"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="topic-card success">
        <h2>Summary</h2>
        <ul>
          <li>✔ Class → blueprint</li>
          <li>✔ Object → instance</li>
          <li>✔ Inheritance → reuse</li>
          <li>✔ Encapsulation → security</li>
          <li>✔ Polymorphism → flexibility</li>
        </ul>

        <p>
          OOP is one of the <strong>most important topics</strong> for Python
          jobs and interviews.
        </p>
      </div>
    </section>
  );
}
