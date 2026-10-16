import portrait from '../assets/profile.jpg';
import { profile } from '../content';
import ExternalLink from '../components/ExternalLink';

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">SOFTWARE DEVELOPER · GERMANY</p>
          <h1>
            Hi, I'm <span>Mohammad Abdul Aziz.</span>
          </h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-description">{profile.introduction}</p>
          <div className="actions">
            <a className="button primary" href="#projects">
              Explore projects ↗
            </a>
            <a className="button secondary" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="social">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </div>
        </div>
        <div className="portrait-frame">
          <img src={portrait} alt="Portrait of Mohammad Abdul Aziz" />
        </div>
      </div>
    </section>
  );
}
