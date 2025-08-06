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
          <div className="timeline-period">2024 - Present</div>
          <div className="timeline-content">
            <h3 className="timeline-title">MERN Stack Developer</h3>
            <p className="timeline-company">Sire Printing</p>
            <p className="timeline-description">
              • Spearheaded the development of full-stack web applications using MongoDB, Express.js, React, and Node.js
              <br />
              • Led a cross-functional team of 5 developers in implementing scalable solutions for enterprise clients
              <br />
              • Optimized application performance, reducing load times by 40% through code splitting and lazy loading
              <br />
              • Implemented CI/CD pipelines reducing deployment times by 60%
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-period">2023 - 2024</div>
          <div className="timeline-content">
            <h3 className="timeline-title">Frontend Developer</h3>
            <p className="timeline-company">Trisage Solutions</p>
            <p className="timeline-description">
              • Developed and maintained 15+ responsive web applications using React.js and Next.js
              <br />
              • Collaborated with UX designers to implement pixel-perfect interfaces with 98% client satisfaction
              <br />
              • Integrated RESTful APIs and implemented state management using Redux Toolkit
              <br />
              • Conducted code reviews and mentored junior developers, improving team productivity by 25%
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-period">2022 - 2023</div>
          <div className="timeline-content">
            <h3 className="timeline-title">Frontend Developer Intern</h3>
            <p className="timeline-company">Trisage Solutions</p>
            <p className="timeline-description">
              • Assisted in developing and maintaining 8+ client websites using modern JavaScript frameworks
              <br />
              • Implemented responsive designs using CSS3 and Sass, ensuring cross-browser compatibility
              <br />
              • Participated in Agile sprints and contributed to daily standups and sprint planning
              <br />
              • Reduced UI bugs by 30% through comprehensive testing using Jest and React Testing Library
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;