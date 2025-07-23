import React from "react";
import { Code, Layers, Monitor, Rocket } from "lucide-react";
import "./services.css"; // Adjust path if needed

const MyServices = () => {
  const services = [
    {
      icon: <Code className="service-icon-svg" />,
      title: "Web Development",
      description: "Building responsive, high-performance websites with modern technologies."
    },
    {
      icon: <Layers className="service-icon-svg" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that enhance user experience."
    },
    {
      icon: <Monitor className="service-icon-svg" />,
      title: "Frontend Development",
      description: "Specializing in React, Vue, and other frontend frameworks."
    },
    {
      icon: <Rocket className="service-icon-svg" />,
      title: "Performance Optimization",
      description: "Making your applications faster and more efficient."
    }
  ];

  return (
    <div className="section-card">
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">MY SERVICES</span>
      </div>

      <h2 className="about-title">
        My <span className="highlight">Services</span>
      </h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
