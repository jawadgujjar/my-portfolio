import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./projects.css";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Soap Boxes Wholesale",
      tech: ["WordPress", "Ecommerce","WooCommerce"],
      link: "https://soapboxeswholesale.com/",
      description: "Full-featured e-commerce packaging store."
    },
    {
      title: "clock 360",
      tech: ["Vue.js", "Firebase"],
      link: "https://modest-tereshkova-3f6498.netlify.app/",
      description: "Custom time tracking and management tool."
    },
    {
      title: "Brand Marketing Hub",
      tech: ["React","Next js", "Node.js", "MongoDB"],
      link: "https://bmh-new.vercel.app/",
      description: "Digital marketing and web & app development hub."
    },
    {
      title: "Digital Block",
      tech: ["React", "GSAP"],
      link: "https://newdigital.vercel.app/",
      description: "Modern portfolio with smooth animations."
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1, // Strictly 1 card for mobile
    }
  };

  return (
    <section className="projects-section">
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">FEATURED PROJECTS</span>
      </div>

      <h2 className="section-title">
        Featured <span className="highlight">Projects</span>
      </h2>

      <div className="carousel-wrapper">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          arrows={true}
          centerMode={false} 
          partialVisible={false}
          containerClass="carousel-container"
          itemClass="carousel-item-custom"
        >
          {projects.map((project, index) => (
            <div className="new-project-card" key={index}>
              <div className="card-top">
                <iframe 
                  src={project.link} 
                  title={project.title} 
                  className="card-iframe" 
                  loading="lazy"
                />
                <div className="iframe-blocker" onClick={() => window.open(project.link, "_blank")}></div>
              </div>
              <div className="card-bottom">
                <div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.description}</p>
                  <div className="tag-container">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="site-link">
                  Visit Site →
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProjects;