import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../data/projectData";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  const handleImageClick = (project, imgIndex) => {
    setSelectedProject(project);
    setSelectedImgIndex(imgIndex);
    setModalOpen(true);
  };

  return (
    <div className="main-container">
      <h1 className="heading">TechPaath Solutions - Student Projects</h1>

      <div className="projects-container">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      {modalOpen && selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setModalOpen(false)}
        >
          <img
            src={selectedProject.images[selectedImgIndex]}
            alt="full"
            className="modal-img"
          />
        </div>
      )}
    </div>
  );
}
