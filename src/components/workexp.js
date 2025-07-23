const WorkExperience = () => {
  return (
    <div className="section-card">
      <div className="section-header">
        <div className="green-dot"></div>
        <span className="section-label">WORK EXPERIENCE</span>
      </div>

      <h2 className="about-title">
        Work <span className="highlight">Experience</span>
      </h2>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-period">2020 - Present</div>
          <div className="timeline-content">
            <h3 className="timeline-title">Senior Frontend Developer</h3>
            <p className="timeline-company">Tech Solutions Inc.</p>
            <p className="timeline-description">
              Lead a team of developers to build complex web applications using React and TypeScript.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-period">2017 - 2020</div>
          <div className="timeline-content">
            <h3 className="timeline-title">Frontend Developer</h3>
            <p className="timeline-company">Digital Creations</p>
            <p className="timeline-description">
              Developed responsive websites and web applications for various clients.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-period">2015 - 2017</div>
          <div className="timeline-content">
            <h3 className="timeline-title">Junior Web Developer</h3>
            <p className="timeline-company">WebStart Agency</p>
            <p className="timeline-description">
              Assisted in building and maintaining client websites using HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;