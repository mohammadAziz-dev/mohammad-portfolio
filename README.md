# Mohammad Aziz — Portfolio

A small React + TypeScript portfolio built with Vite.

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run format
npm run build
```

## Edit portfolio content

- `src/content.ts` — introduction, links, skills, work experience and projects
- `src/sections/` — page sections
- `src/components/` — shared header, footer and external links
- `src/styles.css` — design and responsive styles
- `src/assets/profile.jpg` — portrait

The contact form uses `mailto:` only after an email address is configured in `src/content.ts`. It does not submit messages to a server.

## GitHub Pages

Create a public GitHub repository and push this project to `main`.
In **Settings → Pages**, select **GitHub Actions** as the source.
The workflow in `.github/workflows/deploy.yml` builds and deploys the site.

If publishing at `https://username.github.io/repository/`, set Vite `base` to `/repository/` first. For the custom domain `mohammadaziz.dev`, keep `base: '/'` and configure the domain in GitHub Pages and DNS.

Before sharing: review content, upload a current CV PDF and add a download link, set a public contact email or remove the form, and verify all links.

## Contact form

The contact form posts to Formspree (`https://formspree.io/f/xgaorpoz`). Verify the destination email in Formspree and submit a test message after deploying. The endpoint ID is public by design.
