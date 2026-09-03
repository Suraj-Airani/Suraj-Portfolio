import gennoteThumb from '../data/thumbnails/gennote.png';
import pharmalinkThumb from '../data/thumbnails/pharmalink.png';
import scanqrThumb from '../data/thumbnails/scanqr.png';
import readcartThumb from '../data/thumbnails/readcart.png';
import caiagentThumb from '../data/thumbnails/caiagent.png';
import traverseThumb from '../data/thumbnails/traverse.png';

export const profile = {
  name: 'Suraj S Airani',
  tagline: 'Full Stack Developer',
  location: 'Davangere, Karnataka, India',
  email: 'surajsairani@gmail.com',
  instagramHref: 'https://www.instagram.com/suraj_airani/',
  linkedin: 'https://www.linkedin.com/in/suraj-s-airani/',
  github: 'https://github.com/Suraj-Airani',
  bio: 'Full Stack Developer with hands-on experience building scalable web applications using the Javascript stack, Java, and Spring Boot. Strong foundation in OOP, Data Structures & Algorithms, and RESTful API design, with a track record of shipping production-deployed projects. Graduated in May 2026, available immediately for full-time roles.',
  intro:
    'I build scalable web applications with the Javascript stack, Java, and Spring Boot — from RESTful API design to production deployment.',
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
    items: ['React.js', 'Node.js', 'Express.js', 'Java', 'Spring Boot', 'Hibernate'],
  },
  {
    id: 'databases',
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    items: ['REST APIs', 'OOP', 'Data Structures & Algorithms', 'JWT Authentication', 'CI/CD'],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Google - AntiGravity', 'Vercel'],
  },
];

export const projects = [
  {
    id: 'gennote',
    title: 'GenNote',
    thumbnail: gennoteThumb,
    subtitle: 'Full-Stack Blog Web App',
    year: '2025',
    description:
      'A full-stack blog application built with React.js and Node.js/Express, exposing RESTful APIs for complete CRUD operations secured by JWT-based authentication. It integrates the Google Gemini API for one-click AI-powered blog content generation, alongside the ImageKit API for CDN-based image optimization and upload validation. Shipped through a CI/CD pipeline on Vercel with secure environment variable management.',
    tech: ['React.js', 'Node.js', 'Express', 'JWT', 'Google Gemini API', 'ImageKit', 'Vercel CI/CD'],
    github: 'https://github.com/Suraj-Airani/GenNote',
    live: 'https://gen-note-nine.vercel.app',
  },
  {
    id: 'pharmalink',
    title: 'PharmaLink',
    thumbnail: pharmalinkThumb,
    subtitle: 'Enterprise Pharmacy Management System',
    year: '2026',
    description:
      'An enterprise pharmacy management system engineered with Node.js, TiDB (distributed SQL), and RESTful services for scalable inventory and transaction handling. Authentication is secured with JWT and Bcrypt, enforcing zero-trust access control across the entire API layer. A dual-persistence architecture isolates guest sessions from verified admin data, improving data integrity and system reliability.',
    tech: ['Node.js', 'TiDB', 'REST APIs', 'JWT', 'Bcrypt'],
    github: 'https://github.com/Suraj-Airani/Pharma-Link',
    live: 'https://pharma-link-xi.vercel.app',
  },
  {
    id: 'readcart',
    title: 'ReadCart',
    thumbnail: readcartThumb,
    subtitle: 'Java EE E-Commerce Platform',
    year: '2026',
    description:
      'A full-stack e-commerce web application built with Java Servlets, JSP, and MySQL following the DAO design pattern. Features session-based authentication, product search and category filtering, cart management, and atomic JDBC transactions with rollback support for order checkout and inventory deduction.',
    tech: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Apache Tomcat'],
    github: 'https://github.com/Suraj-Airani/ReadCart',
    live: 'https://readcart.onrender.com',
  },
  {
    id: 'traverse',
    title: 'Traverse',
    thumbnail: traverseThumb,
    subtitle: 'AI Travel Application',
    year: '2026',
    description:
      'An AI-powered travel itinerary generator built with React, Tailwind CSS, and Google Gemini 3.7 Flash. Users can input their interests, travel duration, and budget to receive personalized, day-by-day travel plans complete with activity suggestions, logistics, and AI-generated descriptions. Integrated with Pexels for high-quality destination imagery and OpenWeather for real-time weather data, Traverse transforms trip planning from a chore into a creative, inspiring experience.',
    tech: ['React.js', 'TailwindCSS', 'Framer-Motion', 'Gemini', 'Pexels', 'OpenWeather'],
    github: 'https://github.com/Suraj-Airani/Traverse',
    live: 'https://traverse-travel-app.vercel.app',
  },
  {
    id: 'course-recommendation-agent',
    title: 'Course Recommendation Agent',
    thumbnail: caiagentThumb,
    subtitle: 'LLM-Powered Learning Path Agent',
    year: '2026',
    description:
      'An intelligent course recommendation agent powered by Google Gemini 3.7 Flash and Pydantic schema validation. Features a hybrid pipeline combining deterministic prerequisite graph traversal with LLM reasoning to generate structured, personalized learning paths based on student background, time budget, and career goals.',
    tech: ['Python', 'Google Gemini 3.7 Flash', 'Pydantic', 'Google GenAI SDK', 'Graph Traversal'],
    github: 'https://github.com/Suraj-Airani/Course-Recommendation-Agent',
    live: null,
  },
  {
    id: 'scanqr',
    title: 'Scan QR',
    thumbnail: scanqrThumb,
    subtitle: 'QR Code Generator',
    year: '2025',
    description:
      'A responsive client-side QR code generator built with React and Tailwind CSS. Features an in-browser data-URL pipeline for instant QR generation from URLs, one-click PNG downloads, and keyboard-accessible controls with zero backend dependencies.',
    tech: ['React.js', 'Tailwind CSS', 'qrcode'],
    github: 'https://github.com/Suraj-Airani/Scan-QR',
    live: 'https://scan-qr-pi.vercel.app',
  },
  {
    id: 'simon-game',
    title: 'Simon Game',
    monogram: 'SG',
    subtitle: 'Interactive Memory Game',
    year: '2025',
    description:
      'An interactive web-based recreation of the classic Simon memory game. Features four color-coded pads with audio cues, dynamic sequence progression with real-time level tracking, game-over detection, and event-driven DOM manipulation built with JavaScript and jQuery.',
    tech: ['JavaScript', 'jQuery', 'HTML5', 'CSS3'],
    github: 'https://github.com/Suraj-Airani/Simon_game',
    live: 'https://suraj-airani.github.io/Simon_game/',
  },
];

export const experience = [
  {
    id: 'tap-academy',
    role: 'Software Development Intern',
    company: 'Tap Academy',
    period: 'Jan 2026 – July 2026',
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
