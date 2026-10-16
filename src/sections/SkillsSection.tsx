import { skills } from '../content';

export default function SkillsSection() {
  return (
    <section id="skills" className="section muted">
      <div className="container">
        <p className="eyebrow blue">02 / TECHNICAL STACK</p>
        <h2>Skills & technologies</h2>
        <p className="section-intro">Grouped by area so it's easy to find what matters.</p>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <div className="tags">
                {items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
