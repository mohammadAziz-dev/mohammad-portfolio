import type { en } from './en';

export const de = {
  navigation: {
    about: 'Über mich',
    skills: 'Kenntnisse',
    experience: 'Berufserfahrung',
    projects: 'Projekte',
    education: 'Ausbildung',
    contact: 'Kontakt',
  },
  language: {
    label: 'Sprache',
  },
  hero: {
    eyebrow: 'SOFTWAREENTWICKLER · DEUTSCHLAND',
    greeting: 'Hallo, ich bin',
    headline:
      'Erfahrung mit Angular und TypeScript. Entwicklung moderner Full-Stack-Anwendungen mit Java, Spring Boot und React.',
    introduction:
      'Ich bin Softwareentwickler mit rund fünf Jahren Berufserfahrung in Angular und TypeScript. Ich habe an Enterprise-Anwendungen, wiederverwendbaren UI-Bibliotheken, barrierefreien Benutzeroberflächen und REST-API-Integrationen gearbeitet. Vor Kurzem habe ich ein Bootcamp für Java Development with AI abgeschlossen und dabei SmartCommerce, eine Full-Stack-E-Commerce-Plattform, entwickelt. Außerdem beschäftige ich mich mit KI-gestützter Softwareentwicklung und Agentic Coding, unter anderem mit Claude Code.',
    projectsButton: 'Projekte ansehen ↗',
    contactButton: 'Kontakt aufnehmen',
    portraitAlt: 'Porträt von Mohammad Abdul Aziz',
  },
  about: {
    eyebrow: '01 / ÜBER MICH',
    title: 'Über mich',
    lead: 'Ich bin Softwareentwickler in Hannover und verfüge über rund fünf Jahre Berufserfahrung mit Angular und TypeScript.',
    experience:
      'Meine Erfahrung umfasst Enterprise-Anwendungen, wiederverwendbare Komponentenbibliotheken, Micro-Frontends, Barrierefreiheit, REST-API-Integration, Testing und CI/CD-Workflows.',
    development:
      'Durch Full-Stack-Projekte habe ich meine Kenntnisse in Java, Spring Boot, React und PostgreSQL erweitert. Außerdem habe ich erste praktische Erfahrungen mit KI-gestützter Softwareentwicklung und Agentic Coding mit Claude Code gesammelt. Ich lerne gerne neue Technologien kennen, löse praktische Probleme und entwickle benutzerfreundliche und wartbare Software.',
  },
  skills: {
    eyebrow: '02 / TECHNOLOGIEN',
    title: 'Kenntnisse & Technologien',
    introduction:
      'Ein Überblick über meine technischen Kenntnisse, gegliedert nach Themenbereichen.',
    categories: {
      frontend: 'Frontend-Entwicklung',
      backend: 'Backend & Datenbanken',
      architecture: 'Architektur & Benutzeroberflächen',
      testing: 'Testing & Codequalität',
      devops: 'DevOps & Entwicklungswerkzeuge',
      collaboration: 'Zusammenarbeit & Arbeitsmethoden',
    },
  },
  experience: {
    eyebrow: '03 / BERUFLICHER WERDEGANG',
    title: 'Berufserfahrung',
    jobs: {
      ninjaneers: {
        role: 'Softwareentwickler',
        period: 'Dez. 2022 – Juli 2025',
        description:
          'Mitarbeit an einer großen Versicherungsplattform mit mehr als 20 Entwicklungsteams. Entwicklung wiederverwendbarer und barrierefreier Angular-Komponenten sowie gemeinsam genutzter Bibliotheken. Arbeit mit Nx-Micro-Frontends, Unterstützung bei Angular-Upgrades von Version 16 auf 18 und Integration von REST-APIs. Einsatz von Jasmine, Karma, SonarQube, Jenkins und GitHub Actions zur Sicherstellung der Softwarequalität und Unterstützung der Softwarebereitstellung.',
      },
      adup: {
        role: 'Softwareentwickler',
        period: 'Apr. 2022 – Sept. 2022',
        description:
          'Entwicklung von Funktionen mit Angular und TypeScript für eine digitale Werbeplattform, darunter anpassbare Werbevorlagen. Teilnahme an Code-Reviews, Pair Programming und agiler Teamarbeit.',
      },
      platri: {
        role: 'Junior Angular-Entwickler',
        period: 'Apr. 2020 – Aug. 2021',
        description:
          'Mitarbeit an der Mess- und Prüfanwendung Solviso für JW Froehlich Maschinenfabrik. Entwicklung von Funktionen mit Angular und TypeScript, Integration von REST-APIs, Zustandsverwaltung mit NgRx und Erstellung interaktiver Datenvisualisierungen mit Highcharts.',
      },
      freachly: {
        role: 'Frontend-Entwickler (Trainee)',
        period: 'Juli 2019 – Jan. 2020',
        description:
          'Entwicklung responsiver Frontend-Seiten und wiederverwendbarer UI-Komponenten mit Angular, TypeScript und Angular Material. Integration von REST-APIs sowie Mitarbeit an Code-Reviews, Pair Programming und Unit-Tests.',
      },
      futures: {
        role: 'Full-Stack-Entwickler für Web- und Mobilanwendungen (Werkstudent)',
        period: 'Mai 2018 – Mai 2019',
        description:
          'Entwicklung des CO₂ Monkey CMS im Rahmen meines Masterprojekts und meiner Masterarbeit. Entwicklung von Funktionen für Webanwendungen und hybride mobile Apps mit Angular, Ionic, TypeScript, Node.js, Express.js und MongoDB, einschließlich REST-APIs und Content-Management-Funktionen.',
      },
    },
  },
  projects: {
    eyebrow: '04 / AUSGEWÄHLTE PROJEKTE',
    title: 'Ausgewählte Projekte',
    items: {
      smartcommerce: {
        type: 'Full-Stack-Abschlussprojekt',
        description:
          'Eine E-Commerce-Plattform für mehrere Unternehmen mit einem React-Kundenshop, einem Angular-Admin-Dashboard und einer REST-API auf Basis von Java und Spring Boot. Zu den Funktionen gehören Produkt- und Bestandsverwaltung, separate Onlineshops, Kundenregistrierung mit E-Mail-Verifizierung, Stripe-Testzahlungen, Bestellbestätigungen per E-Mail sowie Echtzeit-Bestandsaktualisierungen über Server-Sent Events.',
      },
    },
    links: {
      source: 'Quellcode',
      shop: 'Kundenshop',
      admin: 'Admin-Demo',
    },
  },
  education: {
    eyebrow: '05 / AUSBILDUNG',
    title: 'Ausbildung & Weiterbildung',
    bootcamp: {
      title: 'Java-Entwicklung mit KI',
      period: 'Juni – Okt. 2026',
      description:
        'Vollzeit-Bootcamp mit Schwerpunkt auf Java, Spring Boot, REST-APIs, Testing, React und Full-Stack-Entwicklung. Einführung in KI-gestützte Softwareentwicklung und Agentic-Coding-Workflows mit Claude Code. Entwicklung von SmartCommerce als Abschlussprojekt.',
    },
    master: {
      title: 'Master of Science',
      field: 'Information Engineering',
      description:
        'Masterprojekt und Masterarbeit über eine IT-gestützte Lösung zur freiwilligen CO₂-Kompensation.',
    },
    bachelor: {
      title: 'Bachelor of Information Technology',
    },
    cv: {
      title: 'Lebenslauf',
      description:
        'Laden Sie meinen Lebenslauf herunter, um mehr über meine Berufserfahrung, technischen Kenntnisse und Ausbildung zu erfahren.',
      button: 'Lebenslauf herunterladen ↓',
    },
  },
  contact: {
    eyebrow: '06 / KONTAKT',
    title: 'Kontakt aufnehmen',
    introduction:
      'Sie möchten mit mir zusammenarbeiten oder eine berufliche Möglichkeit besprechen? Ich freue mich auf Ihre Nachricht.',
    linkedin: 'LinkedIn-Profil',
    github: 'GitHub-Profil',
    form: {
      name: 'Name',
      namePlaceholder: 'Ihr Name',
      email: 'E-Mail',
      emailPlaceholder: 'name@beispiel.de',
      message: 'Nachricht',
      messagePlaceholder: 'Ihre Nachricht',
      send: 'Nachricht senden ↗',
      sending: 'Wird gesendet…',
      success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
      error:
        'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich über LinkedIn.',
    },
  },
  footer: {
    backToTop: 'Nach oben ↑',
  },
} satisfies typeof en;
