import { experiences } from '../content';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="eyebrow blue">03 / PROFESSIONAL JOURNEY</p>
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="experience" key={item.company}>
              <div>
                <p className="period">{item.period}</p>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="fineprint">
          Selected experience. Additional roles and details can be added during the content review.
        </p>
      </div>
    </section>
  );
}
