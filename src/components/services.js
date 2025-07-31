import React from "react";
import { Code, Server, Cpu, Database, ArrowRight, ArrowDown } from "lucide-react";
import "./services.css";

const MyServices = () => {
  const [expanded, setExpanded] = React.useState(false);

  const mainServices = [
    {
      icon: <Code className="service-icon-svg" />,
      title: "Frontend Development",
      description: "Craft stunning and interactive user interfaces! I breathe life into your web applications with modern front-end development. Expect pixel-perfect layouts, responsive design, and a user experience that delights."
    },
    {
      icon: <Server className="service-icon-svg" />,
      title: "Backend Development",
      description: "Building robust server-side applications with secure and scalable architectures. I ensure your application's brain works as beautifully as its face."
    }
  ];

  const additionalServices = [
    {
      icon: <Cpu className="service-icon-svg" />,
      title: "API Integration",
      description: "Seamlessly connect your application with third-party services and create efficient communication between different systems."
    },
    {
      icon: <Database className="service-icon-svg" />,
      title: "Database Management",
      description: "Design, implement, and optimize databases to ensure your application's data is stored efficiently and retrieved quickly."
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

      <p className="services-intro">
        I can craft both the user-friendly fronts and the brainy backs of websites and apps, 
        ensuring a seamless and engaging user experience. You bring the idea, I'll build it to life.
      </p>

      <div className="services-grid">
        {mainServices.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}

        {expanded && additionalServices.map((service, index) => (
          <div className="service-item" key={index + mainServices.length}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <button 
        className="toggle-services-btn" 
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <>
            <ArrowDown className="btn-icon" /> Show Less Services
          </>
        ) : (
          <>
            <ArrowRight className="btn-icon" /> More Services
          </>
        )}
      </button>
    </div>
  );
};

export default MyServices;
