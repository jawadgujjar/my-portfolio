import { useEffect, useRef, useState } from 'react';
import {
  Download,
  Home,
  User,
  Briefcase,
  Award,
  Mail,
  MessageSquare,
  FileText,
  Code,
  Layers,
  Globe
} from "lucide-react";
import "./landing.css";

// Import all components
import MyServices from '../services';
import MyAdvantages from '../advantages';
import WorkExperience from '../workexp';
import MyEducation from '../education';
import FeaturedProjects from '../projects';
import Testimonial from '../testimonial';
import ContactMe from '../contactus';

const Portfolio = () => {
  const sectionRefs = useRef([]);
  const rightSidebarRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [balls, setBalls] = useState([]);

  // Initialize floating balls
  useEffect(() => {
    const colors = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6'];
    const newBalls = [];
    
    for (let i = 0; i < 15; i++) {
      newBalls.push({
        id: i,
        size: Math.random() * 15 + 10,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        xSpeed: (Math.random() - 0.5) * 0.1,
        ySpeed: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.15 + 0.1
      });
    }
    
    setBalls(newBalls);

    const moveBalls = () => {
      setBalls(prevBalls => 
        prevBalls.map(ball => {
          let newX = ball.x + ball.xSpeed;
          let newY = ball.y + ball.ySpeed;
          
          if (newX > 100 || newX < 0) {
            newX = ball.x;
            ball.xSpeed *= -1;
          }
          if (newY > 100 || newY < 0) {
            newY = ball.y;
            ball.ySpeed *= -1;
          }
          
          return {
            ...ball,
            x: newX,
            y: newY
          };
        })
      );
      
      requestAnimationFrame(moveBalls);
    };
    
    const animationId = requestAnimationFrame(moveBalls);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        if (isVisible) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section when icon is clicked
  const scrollToSection = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Floating background balls */}
      <div className="floating-balls">
        {balls.map(ball => (
          <div 
            key={ball.id}
            className="floating-ball"
            style={{
              width: `${ball.size}px`,
              height: `${ball.size}px`,
              left: `${ball.x}%`,
              top: `${ball.y}%`,
              backgroundColor: ball.color,
              opacity: ball.opacity,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Left Sidebar */}
      <div className="left-sidebar">
        <div className="profile-section">
          <div className="profile-image">
            <img
              src="/profile.jpeg"  
              alt="Profile"
              className="profile-img"
            />
          </div>
          <span className="exp-badge">Full Stack Developer </span>
        </div>

        <div className="info-section">
          <div className="info-item">
            <h3 className="info-label">COUNTRY</h3>
            <p className="info-value">pakistan</p>
          </div>
          <div className="info-item">
            <h3 className="info-label">CITY</h3>
            <p className="info-value">Lahore</p>
          </div>
          <div className="info-item">
            <h3 className="info-label">AGE</h3>
            <p className="info-value">22</p>
          </div>
        </div>

        <div className="social-section">
          <h3 className="social-title">Social Links!</h3>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>

        <button className="download-btn">
          <Download className="download-icon" />
          DOWNLOAD CV
        </button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* INTRODUCE SECTION */}
          <div className="section-card" ref={el => sectionRefs.current[0] = el}>
            <div className="section-header">
              <div className="green-dot"></div>
              <span className="section-label">INTRODUCE</span>
            </div>

            <h1 className="hero-title">
              I Craft The <span className="highlight">Digital Landscape</span>
            </h1>
            <p className="hero-subtitle">
              <strong>Websites, apps, design</strong>—yeah, I do all that and make it fire.
              Let's collaborate and build something truly remarkable.
            </p>

            <div className="availability-section">
              <div className="availability-item">
                <div className="green-dot"></div>
                <span className="availability-text">Available For Work</span>
              </div>
              <div className="availability-item">
                <div className="green-dot"></div>
                <span className="availability-text">Full Time</span>
              </div>
            </div>

            <button className="hire-btn">HIRE ME</button>

            <div className="tech-label">
              <div className="tech-badge">
                <span className="tech-trusted">Trusted</span>
                <span className="tech-technologies">Technologies</span>
              </div>
            </div>

            <div className="tech-icons">
              <div className="tech-icon"><span className="tech-text js">JS</span></div>
              <div className="tech-icon"><span className="tech-text ts">TS</span></div>
              <div className="tech-icon"><span className="tech-text js-alt">JS</span></div>
              <div className="tech-icon"><span className="tech-text react">R</span></div>
              <div className="tech-icon"><span className="tech-text node">N</span></div>
              <div className="tech-icon"><span className="tech-text python">P</span></div>
            </div>
          </div>

          {/* ABOUT ME SECTION */}
          <div className="section-card" ref={el => sectionRefs.current[1] = el}>
            <div className="section-header">
              <div className="green-dot"></div>
              <span className="section-label">ABOUT ME</span>
            </div>

            <h2 className="about-title">
              About <span className="highlight">Me</span>
            </h2>

            <div className="contact-grid">
              <div className="contact-column">
                <div className="contact-item">
                  <span className="contact-label">Phone No</span>
                  <span className="contact-colon">:</span>
                  <span className="contact-value">+(1) 234-567-8900</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Github</span>
                  <span className="contact-colon">:</span>
                  <span className="contact-value">@yourusername</span>
                </div>
              </div>
              <div className="contact-column">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <span className="contact-colon">:</span>
                  <span className="contact-value">your.email@example.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Language</span>
                  <span className="contact-colon">:</span>
                  <span className="contact-value">English, Spanish</span>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-item"><div className="stat-number">7+</div><div className="stat-label">Years Of Experience</div></div>
              <div className="stat-item"><div className="stat-number">20+</div><div className="stat-label">Handled Projects</div></div>
              <div className="stat-item"><div className="stat-number">5+</div><div className="stat-label">Open Source Libraries</div></div>
              <div className="stat-item"><div className="stat-number">18+</div><div className="stat-label">Awards Won</div></div>
            </div>
          </div>

          {/* MY SERVICES SECTION */}
          <div ref={el => sectionRefs.current[2] = el}>
            <MyServices />
          </div>

          {/* MY ADVANTAGES SECTION */}
          <div ref={el => sectionRefs.current[3] = el}>
            <MyAdvantages />
          </div>

          {/* WORK EXPERIENCE SECTION */}
          <div ref={el => sectionRefs.current[4] = el}>
            <WorkExperience />
          </div>

          {/* MY EDUCATION SECTION */}
          <div ref={el => sectionRefs.current[5] = el}>
            <MyEducation />
          </div>

          {/* FEATURED PROJECTS SECTION */}
          <div ref={el => sectionRefs.current[6] = el}>
            <FeaturedProjects />
          </div>

          {/* TESTIMONIAL SECTION */}
          <div ref={el => sectionRefs.current[7] = el}>
            <Testimonial />
          </div>

          {/* CONTACT ME SECTION */}
          <div ref={el => sectionRefs.current[8] = el}>
            <ContactMe />
          </div>
        </div>
      </div>

      {/* Right Sidebar with 9 navigation icons */}
      <div className="right-sidebar" ref={rightSidebarRef}>
        <button 
          className={`nav-btn ${activeSection === 0 ? 'active' : ''}`} 
          onClick={() => scrollToSection(0)}
          title="Introduction"
        >
          <Home className="nav-icon" />
        </button>
        <button 
          className={`nav-btn ${activeSection === 1 ? 'active' : ''}`} 
          onClick={() => scrollToSection(1)}
          title="About Me"
        >
          <User className="nav-icon" />
        </button>
        <button 
          className={`nav-btn ${activeSection === 2 ? 'active' : ''}`} 
          onClick={() => scrollToSection(2)}
          title="Services"
        >
          <Code className="nav-icon" />
        </button>
        <button 
          className={`nav-btn ${activeSection === 3 ? 'active' : ''}`} 
          onClick={() => scrollToSection(3)}
          title="Advantages"
        >
          <Layers className="nav-icon" />
        </button>
        <button 
          className={`nav-btn ${activeSection === 4 ? 'active' : ''}`} 
          onClick={() => scrollToSection(4)}
          title="Experience"
        >
          <Briefcase className="nav-icon" />
        </button>
        <button 
          className={`nav-btn ${activeSection === 5 ? 'active' : ''}`} 
          onClick={() => scrollToSection(5)}
          title="Education"
        >
          <Award className="nav-icon" />
        </button>
        <button 
          className={`nav-btn ${activeSection === 6 ? 'active' : ''}`} 
          onClick={() => scrollToSection(6)}
          title="Projects"
        >
          <Globe className="nav-icon" />
        </button>
        <button 
          className={`nav-btn ${activeSection === 7 ? 'active' : ''}`} 
          onClick={() => scrollToSection(7)}
          title="Testimonials"
        >
          <MessageSquare className="nav-icon" />
        </button>
        <button 
          className={`nav-btn ${activeSection === 8 ? 'active' : ''}`} 
          onClick={() => scrollToSection(8)}
          title="Contact"
        >
          <Mail className="nav-icon" />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;