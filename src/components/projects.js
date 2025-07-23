import React from "react";
import "./projects.css"; // Adjust path if different

const FeaturedProjects = () => {
  const projects = [
    {
      image: "https://via.placeholder.com/300x200/4B5563/FFFFFF?text=Project+1",
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration.",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      image: "https://via.placeholder.com/300x200/4B5563/FFFFFF?text=Project+2",
      title: "Task Management App",
      description: "Productivity application for team collaboration.",
      tech: ["Vue.js", "Firebase"]
    }
  ];

  return (
    <div className="section-card">
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">FEATURED PROJECTS</span>
      </div>

      <h2 className="about-title">
        Featured <span className="highlight">Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span className="tech-tag" key={idx}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
