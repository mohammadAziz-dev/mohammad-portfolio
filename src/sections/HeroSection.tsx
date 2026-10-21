import portrait from '../assets/profile.jpg';
import { profile } from '../content';
import { useLanguage } from '../i18n/LanguageContext';
import ExternalLink from '../components/ExternalLink';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{t.hero.eyebrow}</p>

          <h1>
            {t.hero.greeting} <span>{profile.fullName}.</span>
          </h1>

          <p className="hero-headline">{t.hero.headline}</p>
          <p className="hero-description">{t.hero.introduction}</p>

          <div className="actions">
            <a className="button primary" href="#projects">
              {t.hero.projectsButton}
            </a>
            <a className="button secondary" href="#contact">
              {t.hero.contactButton}
            </a>
          </div>

          <div className="social">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </div>
        </div>

        <div className="portrait-frame">
          <img src={portrait} alt={t.hero.portraitAlt} />
        </div>
      </div>
    </section>
  );
}
