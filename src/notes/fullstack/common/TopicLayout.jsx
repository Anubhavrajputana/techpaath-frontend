import React from "react";
import "./TopicLayout.css";

export default function TopicLayout({ title, subtitle, image, children }) {
  return (
    <section className="topic-page">
      {/* HERO */}
      <div className="topic-hero">
        <h1>{title}</h1>
        <p>{subtitle}</p>

        {image && (
          <img
            src={image}
            alt={title}
            className="topic-hero-image"
            loading="lazy"
          />
        )}
      </div>

      {/* CONTENT */}
      {children}
    </section>
  );
}
