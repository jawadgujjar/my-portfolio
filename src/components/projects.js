import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./projects.css";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Brand Marketing Hub",
      // description: "Full-featured online store with Stripe payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://bmh.vercel.app/"
    },
    {
      title: "clock 360",
      // description: "Team collaboration tool with real-time updates",
      tech: ["Vue.js", "Firebase"],
      link: "https://modest-tereshkova-3f6498.netlify.app/"
    },
    {
      title: "Digital Block",
      // description: "Interactive developer portfolio with project showcase",
      tech: ["React", "GSAP"],
      link: "https://newdigital.vercel.app/"
    },
    {
      title: "Sire Printing",
      // description: "Interactive developer portfolio with project showcase",
      tech: ["React", "Next js"],
      link: "https://frontend.sireprinting.co.uk/"
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className="section-card">
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">FEATURED PROJECTS</span>
      </div>

      <h2 className="about-title">
        Featured <span className="highlight">Projects</span>
      </h2>

      <div className="projects-carousel">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item"
          removeArrowOnDeviceType={["mobile"]}
        >
          {projects.map((project, index) => (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card-link"
              key={index}
            >
              <div className="project-card">
                <div className="project-preview">
                  <iframe
                    src={project.link}
                    title={`${project.title} Preview`}
                    className="preview-iframe"
                    sandbox="allow-same-origin allow-scripts"
                    loading="lazy"
                  />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span className="tech-tag" key={idx}>{tech}</span>
                    ))}
                  </div>
                  <div className="visit-site">
                    Visit Site <span className="arrow">→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProjects;