import { experiences } from '../content';
import { useLanguage } from '../i18n/LanguageContext';

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="eyebrow blue">{t.experience.eyebrow}</p>
        <h2>{t.experience.title}</h2>

        <div className="timeline">
          {experiences.map((item) => {
            const job = t.experience.jobs[item.id];

            return (
              <article className="experience" key={item.id}>
                <div>
                  <p className="period">{job.period}</p>
                </div>

                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{job.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
