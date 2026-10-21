import { useLanguage } from '../i18n/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container narrow">
        <p className="eyebrow blue">{t.about.eyebrow}</p>

        <h2>{t.about.title}</h2>

        <p className="lead">{t.about.lead}</p>

        <p>{t.about.experience}</p>

        <p>{t.about.development}</p>
      </div>
    </section>
  );
}
