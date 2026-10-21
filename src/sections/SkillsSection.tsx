import { skills } from '../content';
import { useLanguage } from '../i18n/LanguageContext';

const categoryKeys = [
  'frontend',
  'backend',
  'architecture',
  'testing',
  'devops',
  'collaboration',
] as const;

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section muted">
      <div className="container">
        <p className="eyebrow blue">{t.skills.eyebrow}</p>
        <h2>{t.skills.title}</h2>
        <p className="section-intro">{t.skills.introduction}</p>

        <div className="skills-grid">
          {Object.values(skills).map((items, index) => {
            const category = categoryKeys[index];

            return (
              <div className="skill-group" key={category}>
                <h3>{t.skills.categories[category]}</h3>

                <div className="tags">
                  {items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
