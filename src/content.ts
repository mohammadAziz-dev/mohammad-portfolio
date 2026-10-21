export const profile = {
  shortName: 'Mohammad Aziz',
  fullName: 'Mohammad Abdul Aziz',
  role: 'Software Developer',
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
    'CI/CD Pipelines',
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
  { id: 'ninjaneers', company: 'Ninjaneers GmbH' },
  { id: 'adup', company: 'AdUp Technology' },
  { id: 'platri', company: 'Platri IT GmbH' },
  { id: 'freachly', company: 'Freachly GmbH' },
  { id: 'futures', company: 'Futures Services GmbH' },
] as const;

export const projects = [
  {
    id: 'smartcommerce',
    title: 'SmartCommerce',
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
        id: 'source',
        url: 'https://github.com/mohammadAziz-dev/SmartCommerce',
      },
      {
        id: 'shop',
        url: 'https://smartcommerce-shop.onrender.com/',
      },
      {
        id: 'admin',
        url: 'https://smartcommerce-admin-c1k4.onrender.com/dashboard',
      },
    ],
  },
] as const;
