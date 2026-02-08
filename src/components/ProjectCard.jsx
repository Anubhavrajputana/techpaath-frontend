import React, { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const nextImage = () =>
    setCurrentImg((prev) => (prev + 1) % project.images.length);

  const prevImage = () =>
    setCurrentImg((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );

  // ⭐ TILT FUNCTIONS
  const handleTilt = (e) => {
    const inner = e.currentTarget;
    const rect = inner.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <>
      <div className="tilt-wrapper">
        <div
          className="tilt-inner"
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
        >
          {/* ⭐ MAIN CARD (ONLY ONE) ⭐ */}
          <div
            className={`project-card ${isFlipped ? "flipped" : ""}`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* FRONT */}
           {/* FRONT */}
<div className="front">
  <div className="image-slider">
    <img
      src={project.images[currentImg]}
      alt={project.title}
      className="slider-image"
      onClick={(e) => {
        e.stopPropagation();
        setModalOpen(true);
      }}
    />
    {project.images.length > 1 && (
      <>
        <button
          className="slide-btn left"
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
        >
          ❮
        </button>

        <button
          className="slide-btn right"
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
        >
          ❯
        </button>
      </>
    )}
  </div>

  <h2>{project.title}</h2>
  <h4 className="category">{project.category}</h4>

  {/* ⭐ ADD THIS LINE TO SHOW DESCRIPTION ON FRONT ⭐ */}
  <p className="front-desc">{project.description}</p>
</div>


            {/* BACK */}
            <div className="back">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ⭐ MODAL IMAGE VIEW ⭐ */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[currentImg]}
              alt="full"
              className="modal-img"
            />
            <button className="modal-nav left" onClick={prevImage}>
              ❮
            </button>
            <button className="modal-nav right" onClick={nextImage}>
              ❯
            </button>
          </div>
        </div>
      )}
    </>
  );
}
