import { useState, type SubmitEvent } from 'react';
import { profile } from '../content';
import ExternalLink from '../components/ExternalLink';
import { useLanguage } from '../i18n/LanguageContext';

const FORM_ENDPOINT = 'https://formspree.io/f/xgaorpoz';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const initialForm: ContactForm = { name: '', email: '', message: '' };

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function updateField(field: keyof ContactForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Message delivery failed');

      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section muted">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow blue">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p className="lead">{t.contact.introduction}</p>

          <div className="contact-links">
            <ExternalLink href={profile.linkedin}>{t.contact.linkedin}</ExternalLink>
            <ExternalLink href={profile.github}>{t.contact.github}</ExternalLink>
            {profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              {t.contact.form.name}
              <input
                required
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder={t.contact.form.namePlaceholder}
              />
            </label>
            <label>
              {t.contact.form.email}
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder={t.contact.form.emailPlaceholder}
              />
            </label>
          </div>

          <label>
            {t.contact.form.message}
            <textarea
              required
              name="message"
              rows={6}
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
              placeholder={t.contact.form.messagePlaceholder}
            />
          </label>

          <button className="button submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
          </button>

          {status === 'success' && (
            <p className="notice" role="status">
              {t.contact.form.success}
            </p>
          )}

          {status === 'error' && (
            <p className="notice" role="alert">
              {t.contact.form.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
