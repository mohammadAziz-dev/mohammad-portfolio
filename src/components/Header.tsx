import { useEffect, useState } from 'react';
import { profile } from '../content';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const navigation = [
  { key: 'about', id: 'about' },
  { key: 'skills', id: 'skills' },
  { key: 'experience', id: 'experience' },
  { key: 'projects', id: 'projects' },
  { key: 'education', id: 'education' },
  { key: 'contact', id: 'contact' },
] as const;

export default function Header() {
  const { t, language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = navigation
        .map(({ id }) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);

      const scrollPosition = window.scrollY + 140;
      let currentSection = '';

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, {
      passive: true,
    });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#home"
          onClick={() => {
            setMenuOpen(false);
            setActiveSection('');
          }}
        >
          Mohammad<span>Aziz.</span>
        </a>

        <nav
          id="main-navigation"
          className={menuOpen ? 'mobile-nav-open' : ''}
          aria-label={language === 'de' ? 'Hauptnavigation' : 'Main navigation'}
        >
          {navigation.map(({ key, id }) => (
            <a
              href={`#${id}`}
              key={id}
              className={activeSection === id ? 'nav-active' : ''}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={() => {
                setActiveSection(id);
                setMenuOpen(false);
              }}
            >
              {t.navigation[key]}
            </a>
          ))}
        </nav>

        <LanguageSwitcher />

        <button
          className="menu-toggle"
          type="button"
          aria-label={language === 'de' ? 'Menü öffnen oder schließen' : 'Toggle menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <a
          className="header-link"
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </header>
  );
}
