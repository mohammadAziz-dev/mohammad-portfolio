// Update your professional information here. Keep only skills and experience you can explain.
export const profile = {
  shortName: 'Mohammad Aziz',
  fullName: 'Mohammad Abdul Aziz',
  role: 'Software Developer',
  headline: 'Building thoughtful web applications from frontend to backend.',
  introduction:
    'I am a software developer with professional Angular and TypeScript experience, currently expanding my full-stack skills with React, Java, and Spring Boot. I enjoy building practical, maintainable applications.',
  location: 'Germany',
  github: 'https://github.com/mohammadAziz-dev',
  linkedin: 'https://www.linkedin.com/in/mohammad-aziz-dev/',
  email: '', // Add your preferred public contact email before enabling email contact.
};
export const skills: Record<string, string[]> = {
  Languages: ['TypeScript', 'JavaScript', 'Java', 'HTML', 'CSS', 'SQL'],
  Frontend: ['Angular', 'React', 'RxJS', 'Angular Material', 'Ionic'],
  'Backend & Data': ['Spring Boot', 'REST APIs', 'PostgreSQL', 'Node.js'],
  'Tools & DevOps': ['Git', 'GitHub Actions', 'Docker', 'Jenkins', 'Postman'],
};
export const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Platri IT GmbH',
    period: '2020 – 2021',
    description:
      'Worked on Angular and TypeScript applications for an industrial client, integrating REST APIs and data visualizations.',
  },
  {
    role: 'Frontend Developer',
    company: 'Adup',
    period: '2019 – 2020',
    description: 'Worked with Angular, advertising templates, REST APIs, and CI workflows.',
  },
  {
    role: 'Research Assistant',
    company: 'Futures-Services GmbH',
    period: '2018 – 2019',
    description:
      'Developed a web-based solution for voluntary CO₂ compensation as part of my master’s project and thesis.',
  },
];
export const projects = [
  {
    title: 'SmartCommerce',
    type: 'Featured full-stack capstone',
    description:
      'A multi-business commerce platform with a React customer shop, Angular administration, Java Spring Boot API, PostgreSQL, Stripe test payments, and live inventory updates.',
    stack: ['React', 'Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Stripe'],
    links: [
      { label: 'Source code', url: 'https://github.com/mohammadAziz-dev/SmartCommerce' },
      { label: 'Customer shop', url: 'https://smartcommerce-shop.onrender.com/' },
      { label: 'Admin demo', url: 'https://smartcommerce-admin-c1k4.onrender.com/dashboard' },
    ],
  },
];
