import React from "react";
import { Mail } from "lucide-react";
import "./contactus.css"; // update path if CSS is elsewhere

const ContactMe = () => {
  return (
    <div className="section-card">
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">CONTACT ME</span>
      </div>

      <h2 className="about-title">
        Contact <span className="highlight">Me</span>
      </h2>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" className="form-input" required />
          <input type="email" placeholder="Your Email" className="form-input" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Subject" className="form-input" />
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" className="form-textarea" required></textarea>
        </div>
        <button type="submit" className="send-btn">
          <Mail className="send-icon" />
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
