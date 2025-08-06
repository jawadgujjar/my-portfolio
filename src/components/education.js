import React from "react";
import "./education.css";

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
        My academic background has equipped me with strong problem-solving skills, technical expertise, and the ability to adapt to evolving technologies—qualities that drive my success as a developer.
      </p>

      <div className="timeline">
        {/* Bachelor's Degree */}
        <div className="timeline-item">
          <div className="timeline-period">2018 - 2022</div>
          <div className="timeline-content">
            <h3 className="timeline-title">Bachelor of Science in Computer Science (BSCS)</h3>
            <p className="timeline-company">Lahore Garrison University, Pakistan</p>
            <ul className="timeline-description">
              <li><strong>Specialization:</strong> Software Engineering, Database Systems, and Web Development</li>
              {/* <li><strong>Key Courses:</strong> Data Structures & Algorithms, OOP, AI, Cloud Computing, and Cybersecurity</li> */}
             <li><strong>Final Year Project:</strong> Developed a university project management system using React Native and React.js.</li>
              <li><strong>Achievements:</strong> Graduated with a <strong>3.6 GPA</strong>, awarded for "Best Final Year Project"</li>
            </ul>
          </div>
        </div>

        {/* Optional: Add certifications or additional education */}
        {/* <div className="timeline-item">
          <div className="timeline-period">2023</div>
          <div className="timeline-content">
            <h3 className="timeline-title">Advanced Frontend Development Certification</h3>
            <p className="timeline-company">Udemy / Coursera</p>
            <ul className="timeline-description">
              <li>Mastered React, Next.js, and modern JavaScript frameworks</li>
              <li>Built 10+ projects including e-commerce apps and SaaS platforms</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyEducation;