export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="eyebrow blue">05 / LEARNING</p>
        <h2>Education & training</h2>
        <div className="education-grid">
          <article className="info-card">
            <h3>Master's degree</h3>
            <p>
              Master's thesis on an IT-assisted solution for voluntary CO₂ compensation in private
              transportation.
            </p>
            <p className="fineprint">Institution and degree details to be confirmed.</p>
          </article>
          <article className="info-card">
            <h3>Java Development with AI</h3>
            <p>neue fische · 2026</p>
            <p>Java, Spring Boot, React, testing, and full-stack project development.</p>
          </article>
        </div>
        <div className="cv">
          <div>
            <h3>Curriculum vitae</h3>
            <p>Downloadable CV will be enabled once your latest PDF is added.</p>
          </div>
          <span className="button disabled" aria-disabled="true">
            CV coming soon
          </span>
        </div>
      </div>
    </section>
  );
}
