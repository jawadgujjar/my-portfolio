import React from "react";
import "./education.css"; // Make sure your CSS file is properly linked

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

      <p className="education-subtext">
        Education is an investment in knowledge, providing the expertise needed for success.
        My academic background supports my ability to deliver impactful results.
      </p>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-period">2018-22</div>
          <div className="timeline-content">
            <h3 className="timeline-title">Bachelor's in Computer Science</h3>
            <p className="timeline-company">Lahore Garrison University</p>
            <p className="timeline-description">
              Specialized in Software Development and Database Systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEducation;