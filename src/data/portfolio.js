export const profile = {
  name: 'Suraj S Airani',
  tagline: 'Full Stack Developer',
  location: 'Davangere, Karnataka, India',
  email: 'surajsairani@gmail.com',
  instagramHref: 'https://www.instagram.com/suraj_airani/',
  linkedin: 'https://www.linkedin.com/in/suraj-s-airani/',
  github: 'https://github.com/Suraj-Airani',
  bio: 'Full Stack Developer with hands-on experience building scalable web applications using the MERN stack, Java, and Spring Boot. Strong foundation in OOP, Data Structures & Algorithms, and RESTful API design, with a track record of shipping production-deployed projects. Graduated in May 2026, available immediately for full-time roles.',
  intro:
    'I build scalable web applications with the MERN stack, Java, and Spring Boot — from RESTful API design to production deployment.',
  availability: 'Available immediately for full-time roles',
};

export const education = [
  {
    title: 'B.E. — Electronics & Communication Engineering',
    school: "Alva's Institute of Engineering and Technology, VTU",
    period: 'Dec 2022 – May 2026',
    score: 'CGPA 8.00',
  },
  {
    title: 'Pre-University — PCMC',
    school: 'Sir M V PU College, Davangere (Dept. of Pre-University Education, Karnataka)',
    period: 'Sept 2020 – Apr 2022',
    score: '85.5%',
  },
  {
    title: 'CBSE — Class 10',
    school: 'SPSMR School, Davangere',
    period: 'June 2019 – Mar 2020',
    score: '82.4%',
  },
];

export const certifications = [
  { title: 'The Complete Full-Stack Web Development Bootcamp', issuer: 'Udemy', date: 'July 2025' },
  { title: 'Fundamentals of Network Communication', issuer: 'Coursera', date: 'Sept 2025' },
  { title: 'Software Engineering Essentials', issuer: 'Coursera', date: 'Sept 2025' },
  { title: 'Programming in Java', issuer: 'NPTEL', date: 'Nov 2025' },
  { title: 'JavaScript Programming with React, Node & MongoDB', issuer: 'IBM', date: 'June 2026' },
];

export const skillGroups = [
  {
    id: 'full-stack',
    label: 'Full Stack',
    items: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Java', 'Spring Boot', 'Hibernate'],
  },
  {
    id: 'databases',
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    items: ['REST APIs', 'OOP', 'Data Structures & Algorithms', 'JWT Authentication', 'CI/CD'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel'],
  },
];

export const projects = [
  {
    id: 'gennote',
    title: 'GenNote',
    monogram: 'GN',
    subtitle: 'Full-Stack Blog Web App',
    year: '2025',
    description:
      'A full-stack blog application built with React.js and Node.js/Express, exposing RESTful APIs for complete CRUD operations secured by JWT-based authentication. It integrates the Google Gemini API for one-click AI-powered blog content generation, alongside the ImageKit API for CDN-based image optimization and upload validation. Shipped through a CI/CD pipeline on Vercel with secure environment variable management.',
    tech: ['React.js', 'Node.js', 'Express', 'JWT', 'Google Gemini API', 'ImageKit', 'Vercel CI/CD'],
    github: 'https://github.com/Suraj-Airani',
    live: null,
  },
  {
    id: 'pharmalink',
    title: 'PharmaLink',
    monogram: 'PL',
    subtitle: 'Enterprise Pharmacy Management System',
    year: '2026',
    description:
      'An enterprise pharmacy management system engineered with Node.js, TiDB (distributed SQL), and RESTful services for scalable inventory and transaction handling. Authentication is secured with JWT and Bcrypt, enforcing zero-trust access control across the entire API layer. A dual-persistence architecture isolates guest sessions from verified admin data, improving data integrity and system reliability.',
    tech: ['Node.js', 'TiDB', 'REST APIs', 'JWT', 'Bcrypt'],
    github: 'https://github.com/Suraj-Airani',
    live: null,
  },
];

export const experience = [
  {
    id: 'tap-academy',
    role: 'Software Development Intern',
    company: 'Tap Academy',
    period: 'Jan 2026 – Present',
    points: [
      'Applied OOP principles and Data Structures & Algorithms in Core Java to solve complex algorithmic problems and build robust backend logic.',
      'Developed full-stack applications using React.js, Spring Boot/Hibernate, and MySQL, following Agile development practices in a collaborative team environment.',
    ],
  },
];

export const marqueeItems = [
  'React.js',
  'Node.js',
  'Express.js',
  'Java',
  'Spring Boot',
  'Hibernate',
  'PostgreSQL',
  'MySQL',
  'REST APIs',
  'JWT Auth',
  'CI/CD',
  'Git',
  'Vercel',
];
