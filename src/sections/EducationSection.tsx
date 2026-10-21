import { useLanguage } from '../i18n/LanguageContext';

export default function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section">
      <div className="container">
        <p className="eyebrow blue">{t.education.eyebrow}</p>
        <h2>{t.education.title}</h2>

        <div className="education-grid">
          <article className="info-card">
            <h3>{t.education.bootcamp.title}</h3>
            <p>neuefische GmbH · {t.education.bootcamp.period}</p>
            <p>{t.education.bootcamp.description}</p>
          </article>

          <article className="info-card">
            <h3>{t.education.master.title}</h3>
            <p>{t.education.master.field}</p>
            <p>Fachhochschule Kiel · 2015 – 2019</p>
            <p>{t.education.master.description}</p>
          </article>

          <article className="info-card">
            <h3>{t.education.bachelor.title}</h3>
            <p>Universiti Utara Malaysia · 2007 – 2012</p>
          </article>
        </div>

        <div className="cv">
          <div>
            <h3>{t.education.cv.title}</h3>
            <p>{t.education.cv.description}</p>
          </div>

          <a className="button primary" href="/Mohammad-Abdul-Aziz-CV.pdf" download>
            {t.education.cv.button}
          </a>
        </div>
      </div>
    </section>
  );
}
