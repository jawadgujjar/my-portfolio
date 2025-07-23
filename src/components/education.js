import React from "react";
import "./education.css"; // Adjust the path if your CSS file is elsewhere

const MyEducation = () => {
  return (
    <div className="section-card">
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">MY EDUCATION</span>
      </div>

      <h2 className="about-title">
        My <span className="highlight">Education</span>
      </h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-period">2011 - 2015</div>
          <div className="timeline-content">
            <h3 className="timeline-title">Bachelor's in Computer Science</h3>
            <p className="timeline-company">New York University</p>
            <p className="timeline-description">
              Specialized in Web Technologies and Human-Computer Interaction.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-period">2009 - 2011</div>
          <div className="timeline-content">
            <h3 className="timeline-title">High School Diploma</h3>
            <p className="timeline-company">Tech High School</p>
            <p className="timeline-description">
              Focused on mathematics and computer programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
