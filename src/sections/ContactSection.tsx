import { useState, type SubmitEvent } from 'react';
import { profile } from '../content';
import ExternalLink from '../components/ExternalLink';

const FORM_ENDPOINT = 'https://formspree.io/f/xgaorpoz';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const initialForm: ContactForm = { name: '', email: '', message: '' };

export default function ContactSection() {
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
          <p className="eyebrow blue">06 / CONTACT</p>
          <h2>Get in touch</h2>
          <p className="lead">
            Interested in working together or discussing an opportunity? I'd be happy to hear from
            you.
          </p>
          <div className="contact-links">
            <ExternalLink href={profile.linkedin}>LinkedIn profile</ExternalLink>
            <ExternalLink href={profile.github}>GitHub profile</ExternalLink>
            {profile.email && <a href={`mailto:${profile.email}`}>{profile.email}</a>}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Name
              <input
                required
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label>
            Message
            <textarea
              required
              name="message"
              rows={6}
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
              placeholder="Your message"
            />
          </label>
          <button className="button submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message ↗'}
          </button>
          {status === 'success' && (
            <p className="notice" role="status">
              Thank you! Your message was sent successfully.
            </p>
          )}
          {status === 'error' && (
            <p className="notice" role="alert">
              Message could not be sent. Please try again or contact me on LinkedIn.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
