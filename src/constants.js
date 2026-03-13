// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';

import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';

import cppLogo from './assets/tech_logo/cpp.png';

import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';

import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import mcLogo from './assets/tech_logo/mc.png'



// Experience Section Logo's
import internpeLogo from './assets/company_logo/internpe.png'

// Education Section Logo's
import iitpLogo from './assets/education_logo/iitp_Logo.png';
import bsebLogo from './assets/education_logo/bseb_Logo.png';

// Project Section Logo's

import vaultifyLogo from './assets/work_logo/vaultify.png'
import kisanLogo from './assets/work_logo/kisan.png'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },

      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ]

  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [

      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: internpeLogo,
    role: "Python intern",
    company: "InternPe",
    date: "sep 2024 - oct 2024",
    desc: "Worked on practical Python projects focusing on problem solving, automation, and application development. Gained hands-on experience with Python fundamentals, debugging, and building efficient code while collaborating in a learning-focused development environment.",
    skills: [
      "Python Programming",
      "Python Libraries",
      "Object-Oriented Programming",
      "Game Development",
      "Debugging",
      "Git , GitHub",

    ],
  },
]

export const education = [
  {
    id: 0,
    img: iitpLogo,
    school: "Indian Institute Of Technology , Patna",
    date: "Sept 2024 - Present",
    grade: " 9.23 (CPI) ",
    desc: "I am currently pursuing a Bachelor’s degree in Computer Science (B.Sc.), where I have been exploring various areas of computing and software development. Throughout my academic journey, I have developed a strong foundation in Data Structures and Algorithms, Web Development, and Database Management Systems. These subjects have helped me understand how software systems are designed and built.",
    degree: "Bachelor of Science - B.Sc (Computer Science & Data Analytics)",
  },
  {
    id: 1,
    img: bsebLogo,
    school: "S.J.S College Kurtha , Arwal",
    date: "Apr 2020 - March 2022",
    grade: "86.2%",
    desc: "I completed my Class 12 education from the Bihar School Examination Board (BSEB) with Physics, Chemistry, and Mathematics (PCM) as my core subjects. During this time, I developed strong analytical and problem-solving skills through my studies in science and mathematics.",
    degree: "BSEB(XII) - PCM",
  },
  {
    id: 2,
    img: bsebLogo,
    school: "High School Bedauli , Imamganj",
    date: "Apr 2019 - March 2020",
    grade: "84.2%",
    desc: "I completed my Class 10 from the Bihar School Examination Board (BSEB), where I studied basic subjects like Mathematics, Science, Social Science, Hindi, Sanskrit and English, which helped build my academic foundation..",
    degree: "BSEB(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Kisan Traders : An eCommerce Website",
    description:
      "Kisan Traders is an agriculture-focused web platform designed to connect farmers and buyers. The website provides a simple interface to explore agricultural products, view details, and manage listings. It is built using modern web technologies to ensure a responsive and user-friendly experience.",
    image: kisanLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/priyanshuuuraj/KisanTraders",
    webapp: "https://kisantraders.onrender.com/",
  },
  {
    id: 1,
    title: "Vaultify : An Employee Management System",
    description:
      "Vaultify is an employee management system built with React, using localStorage to persist data across sessions. It lets you add, update, and delete employee records, manage departments, and keep everything organized — no backend needed.",
    image: vaultifyLogo,
    tags: ["React", "localStorage", "Tailwind CSS", "JavaScript", "CRUD"],
    github: "https://github.com/priyanshuuuraj/Vaultify",
    webapp: "https://vaultify07.netlify.app/",
  },
];