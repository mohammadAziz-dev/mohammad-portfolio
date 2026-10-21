import { useLanguage } from '../i18n/LanguageContext';
import { translations, type Language } from '../i18n/types';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="language-switcher" role="group" aria-label={t.language.label}>
      {(Object.keys(translations) as Language[]).map((option) => (
        <button
          key={option}
          type="button"
          className={language === option ? 'language-button active' : 'language-button'}
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
