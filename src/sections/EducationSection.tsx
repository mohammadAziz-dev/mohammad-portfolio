export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="eyebrow blue">05 / LEARNING</p>
        <h2>Education & training</h2>

        <div className="education-grid">
          <article className="info-card">
            <h3>Java Development with AI</h3>
            <p>neuefische GmbH · Jun – Oct 2026</p>

            <p>
              Full-time bootcamp focused on Java, Spring Boot, REST APIs, testing, React, and
              full-stack development. Introduced to AI-assisted development and agentic coding
              workflows using Claude Code. Developed SmartCommerce as a capstone project.
            </p>
          </article>

          <article className="info-card">
            <h3>Master of Science</h3>
            <p>Information Engineering</p>
            <p>Fachhochschule Kiel · 2015 – 2019</p>
            <p>
              Master's project and thesis focused on an IT-assisted solution for voluntary CO₂
              compensation.
            </p>
          </article>

          <article className="info-card">
            <h3>Bachelor of Information Technology</h3>
            <p>Universiti Utara Malaysia · 2007 – 2012</p>
          </article>
        </div>

        <div className="cv">
          <div>
            <h3>Curriculum vitae</h3>
            <p>
              Download my CV to learn more about my professional experience, technical skills, and
              education.
            </p>
          </div>

          <a className="button primary" href="/Mohammad-Abdul-Aziz-CV.pdf" download>
            Download CV ↓
          </a>
        </div>
      </div>
    </section>
  );
}
