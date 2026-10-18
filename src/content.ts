export const profile = {
  shortName: 'Mohammad Aziz',
  fullName: 'Mohammad Abdul Aziz',
  role: 'Software Developer',
  headline:
    'Angular & TypeScript experience. Building full-stack applications with Java, Spring Boot, and React.',
  introduction:
    'I am a software developer with around five years of professional experience in Angular and TypeScript. I have built enterprise applications, reusable UI libraries, accessible interfaces, and REST API integrations. I recently completed a Java Development with AI bootcamp, where I developed SmartCommerce, a full-stack e-commerce platform. I am also exploring AI-assisted development and agentic coding workflows using tools such as Claude Code.',
  location: 'Hannover, Germany',
  github: 'https://github.com/mohammadAziz-dev',
  linkedin: 'https://www.linkedin.com/in/mohammad-aziz-dev/',
  email: 'm.a.aziz1900@gmail.com',
};

export const skills: Record<string, string[]> = {
  'Frontend Development': [
    'Angular',
    'TypeScript',
    'JavaScript',
    'React',
    'HTML5',
    'CSS3',
    'Angular Material',
    'RxJS',
    'NgRx',
    'Bootstrap',
    'Ionic',
  ],
  'Backend & Databases': [
    'Java',
    'Spring Boot',
    'REST APIs',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'MongoDB',
  ],
  'Architecture & UI': [
    'Nx',
    'Micro-Frontends',
    'Reusable Component Libraries',
    'Responsive Design',
    'Accessibility',
    'Internationalization',
  ],
  'Testing & Code Quality': [
    'JUnit 5',
    'Mockito',
    'Jasmine',
    'Karma',
    'Unit Testing',
    'Integration Testing',
    'SonarQube',
  ],
  'DevOps & Development Tools': [
    'Git',
    'GitHub',
    'GitHub Actions',
    'Docker',
    'Jenkins',
    'Maven',
    'Postman',
    'IntelliJ IDEA',
    'VS Code',
  ],

  'Collaboration & Workflow': [
    'Scrum',
    'Kanban',
    'Code Reviews',
    'Pair Programming',
    'Jira',
    'Figma',
    'AI-Assisted Development',
    'Agentic Coding (Fundamentals)',
    'Claude Code',
    'GitHub Copilot',
  ],
};

export const experiences = [
  {
    role: 'Software Developer',
    company: 'Ninjaneers GmbH',
    period: 'Dec 2022 – Jul 2025',
    description:
      'Contributed to a large-scale enterprise insurance platform involving more than 20 development teams. Developed reusable and accessible Angular components and shared libraries, worked with Nx micro-frontends, supported Angular upgrades from version 16 to 18, and integrated REST APIs. Used Jasmine, Karma, SonarQube, Jenkins, and GitHub Actions to support software quality and delivery.',
  },
  {
    role: 'Software Developer',
    company: 'AdUp Technology',
    period: 'Apr 2022 – Sep 2022',
    description:
      'Developed Angular and TypeScript features for a digital advertising platform, including customizable advertisement templates. Participated in code reviews, pair programming, and Agile collaboration.',
  },
  {
    role: 'Junior Angular Developer',
    company: 'Platri IT GmbH',
    period: 'Apr 2020 – Aug 2021',
    description:
      'Worked on the Solviso measurement and test engineering application for JW Froehlich Maschinenfabrik. Developed Angular and TypeScript features, integrated REST APIs, managed state with NgRx, and created interactive data visualizations using Highcharts.',
  },
  {
    role: 'Frontend Developer Trainee',
    company: 'Freachly GmbH',
    period: 'Jul 2019 – Jan 2020',
    description:
      'Developed responsive frontend pages and reusable UI components using Angular, TypeScript, and Angular Material. Integrated REST APIs and contributed to code reviews, pair programming, and unit testing.',
  },
  {
    role: 'Full-Stack Web & Mobile Developer (Work Study)',
    company: 'Futures Services GmbH',
    period: 'May 2018 – May 2019',
    description:
      'Developed the CO₂ Monkey CMS as part of my Master’s project and thesis. Built web and hybrid mobile application features using Angular, Ionic, TypeScript, Node.js, Express.js, and MongoDB, including REST APIs and content management functionality.',
  },
];

export const projects = [
  {
    title: 'SmartCommerce',
    type: 'Featured Full-Stack Capstone Project',
    description:
      'A multi-business e-commerce platform built with a React customer shop, Angular administration dashboard, and Java Spring Boot REST API. Features include product and inventory management, separate business storefronts, customer registration with email verification, Stripe test payments, order confirmation emails, and real-time inventory updates using Server-Sent Events.',
    stack: [
      'Java',
      'Spring Boot',
      'React',
      'Angular',
      'TypeScript',
      'PostgreSQL',
      'Stripe',
      'Docker',
    ],
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/mohammadAziz-dev/SmartCommerce',
      },
      {
        label: 'Customer shop',
        url: 'https://smartcommerce-shop.onrender.com/',
      },
      {
        label: 'Admin demo',
        url: 'https://smartcommerce-admin-c1k4.onrender.com/dashboard',
      },
    ],
  },
];
