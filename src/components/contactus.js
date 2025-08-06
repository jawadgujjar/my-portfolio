import React, { useState } from "react";
import { Mail } from "lucide-react";
import "./contactus.css";

const ContactMe = () => {
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ message: "Sending...", type: "info" });

    // FormSubmit handles the submission; no additional fetch logic needed
    const form = e.target;
    form.submit(); // Trigger FormSubmit's default behavior

    // Reset form and show success message (FormSubmit redirects to a thank-you page by default)
    setTimeout(() => {
      setStatus({ message: "Message sent successfully!", type: "success" });
      form.reset();
    }, 1000); // Simulate delay for user feedback
  };

  return (
    <div className="section-card">
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">CONTACT ME</span>
      </div>

      <h2 className="about-title">
        Get in <span className="highlight">Touch</span>
      </h2>

      <form
        className="contact-form"
        action="https://formsubmit.co/jawadgujjar573@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="New Contact Form Submission" />
        <input
          type="hidden"
          name="_next"
          value="https://yourdomain.com/thanks.html"
        />
        <div className="form-group form-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            rows="5"
            required
          ></textarea>
        </div>
        <div className={`form-message ${status.type}`} id="form-message">
          {status.message}
        </div>
        <button type="submit" className="send-btn">
          <Mail className="send-icon" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;