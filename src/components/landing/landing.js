import { Download, Home, User, Briefcase, Award, Mail, MessageSquare, FileText } from "lucide-react"
import "./landing.css"

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <div className="profile-section">
          <div className="profile-image">
            <img
              src="https://via.placeholder.com/128x128/4B5563/FFFFFF?text=Profile"
              alt="Profile"
              className="profile-img"
            />
          </div>
          <span className="exp-badge">Exp</span>
        </div>

        <div className="info-section">
          <div className="info-item">
            <h3 className="info-label">COUNTRY</h3>
            <p className="info-value">United States</p>
          </div>
          <div className="info-item">
            <h3 className="info-label">CITY</h3>
            <p className="info-value">New York</p>
          </div>
          <div className="info-item">
            <h3 className="info-label">AGE</h3>
            <p className="info-value">28</p>
          </div>
        </div>

        <div className="social-section">
          <h3 className="social-title">Social Links!</h3>
          <div className="social-links">
            <a href="#" className="social-link">
              GitHub
            </a>
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
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
          {/* Hero Section */}
          <div className="hero-section">
            <div className="section-header">
              <div className="green-dot"></div>
              <span className="section-label">INTRODUCE</span>
            </div>

            <h1 className="hero-title">
              I Craft The <span className="highlight">Digital Landscape</span>
            </h1>

            <div className="availability-section">
              <div className="availability-item">
                <div className="green-dot"></div>
                <span className="availability-text">Available For Work</span>
              </div>
              <div className="green-dot"></div>
            </div>

            <button className="hire-btn">HIRE ME</button>

            {/* Technology Icons */}
            <div className="tech-label">
              <div className="tech-badge">
                <span className="tech-trusted">Trusted</span>
                <span className="tech-technologies">Technologies</span>
              </div>
            </div>

            <div className="tech-icons">
              <div className="tech-icon">
                <span className="tech-text js">JS</span>
              </div>
              <div className="tech-icon">
                <span className="tech-text ts">TS</span>
              </div>
              <div className="tech-icon">
                <span className="tech-text js-alt">JS</span>
              </div>
              <div className="tech-icon">
                <span className="tech-text react">R</span>
              </div>
              <div className="tech-icon">
                <span className="tech-text node">N</span>
              </div>
              <div className="tech-icon">
                <span className="tech-text python">P</span>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="about-section">
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
                  <span className="contact-value">+(1)</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Github</span>
                  <span className="contact-colon">:</span>
                  <span className="contact-value">@username</span>
                </div>
              </div>
              <div className="contact-column">
                <div className="contact-item">
                  <span className="contact-label">Email</span>
                  <span className="contact-colon">:</span>
                  <span className="contact-value">contact@example.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Language</span>
                  <span className="contact-colon">:</span>
                  <span className="contact-value">English, Spanish</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">7+</div>
                <div className="stat-label">Years Of Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Handled Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Open Source Libraries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">18+</div>
                <div className="stat-label">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar Navigation */}
      <div className="right-sidebar">
        <button className="nav-btn">
          <Home className="nav-icon" />
        </button>
        <button className="nav-btn">
          <User className="nav-icon" />
        </button>
        <button className="nav-btn">
          <Briefcase className="nav-icon" />
        </button>
        <button className="nav-btn">
          <Award className="nav-icon" />
        </button>
        <button className="nav-btn">
          <FileText className="nav-icon" />
        </button>
        <button className="nav-btn">
          <MessageSquare className="nav-icon" />
        </button>
        <button className="nav-btn">
          <Mail className="nav-icon" />
        </button>
      </div>
    </div>
  )
}

export default Portfolio
