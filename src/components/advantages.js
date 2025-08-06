import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./advantages.css";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiMongodb } from "react-icons/si";
import { FaLink, FaExchangeAlt } from "react-icons/fa";

const MyAdvantages = () => {
  // Skills data for carousel
  const skills = [
    { name: "React.js", percentage: 90, icon: <FaReact size={48} /> },
    { name: "Next.js", percentage: 85, icon: <SiNextdotjs size={48} /> },
    { name: "JavaScript", percentage: 95, icon: <SiJavascript size={48} /> },
    { name: "Restful API's", percentage: 80, icon: <FaLink size={48} /> },
    { name: "MongoDB", percentage: 75, icon: <SiMongodb size={48} /> },
    { name: "API Integration", percentage: 85, icon: <FaExchangeAlt size={48} /> }
  ];

  // Carousel responsive settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
      {/* Section Header */}
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">MY ADVANTAGES</span>
      </div>

      <h2 className="about-title">
        My <span className="highlight">Advantages</span>
      </h2>

      <p className="tagline">
        Unleashing my potential for your success: A showcase of skills and results.
      </p>

      {/* Skills Carousel Section */}
      <div className="carousel-wrapper">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item"
          removeArrowOnDeviceType={["mobile"]}
        >
          {skills.map((skill, index) => (
            <div key={`skill-${index}`} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="circular-progress">
                <svg className="progress-ring" viewBox="0 0 100 100">
                  <circle
                    className="progress-ring-circle-bg"
                    stroke="#1e1e1e"
                    strokeWidth="8"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="progress-ring-circle"
                    stroke="#4CAF50"
                    strokeWidth="8"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                    style={{
                      strokeDasharray: 251.2,
                      strokeDashoffset: 251.2 - (251.2 * skill.percentage) / 100
                    }}
                  />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="progress-text"
                  >
                    {skill.percentage}%
                  </text>
                </svg>
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MyAdvantages;