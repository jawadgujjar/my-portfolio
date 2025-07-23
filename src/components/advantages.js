import React from "react";
import "./advantages.css"; // if your styles are here

const MyAdvantages = () => {
  const advantages = [
    "7+ years of professional experience",
    "Strong problem-solving skills",
    "Excellent communication abilities",
    "Proven track record of successful projects",
    "Continuous learner of new technologies"
  ];

  return (
    <div className="section-card">
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">MY ADVANTAGES</span>
      </div>

      <h2 className="about-title">
        My <span className="highlight">Advantages</span>
      </h2>

      <ul className="advantages-list">
        {advantages.map((item, index) => (
          <li className="advantage-item" key={index}>
            <div className="green-dot small-dot"></div>
            <span className="advantage-text">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyAdvantages;
