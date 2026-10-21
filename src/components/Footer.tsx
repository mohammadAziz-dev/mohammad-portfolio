import { profile } from '../content';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <a href="#home">{t.footer.backToTop}</a>
      </div>
    </footer>
  );
}
