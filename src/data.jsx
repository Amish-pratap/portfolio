import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.png";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Amish",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Pratap Singh",
  },

  {
    id: 3,
    title: "Age : ",
    description: "22 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  // {
  //   id: 5,
  //   title: "Freelance : ",
  //   description: "Available",
  // },

  {
    id: 6,
    title: "Address : ",
    description: "Raipur",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 6350521225",
  },

  {
    id: 8,
    title: "Email : ",
    description: "amishpratapsingh13@gmail.com",
  },

  // {
  //   id: 9,
  //   title: "Skype : ",
  //   description: "steve.milner",
  // },

  {
    id: 10,
    title: "Langages : ",
    description: "Hindi, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "7+",
    title: "Months of <br /> Experience",
  },

  {
    id: 2,
    no: "10+",
    title: "Completed<br /> Projects",
  },

  {
    id: 3,
    no: "1300+",
    title: "Points in<br /> Geeks for Geeks",
  },

  {
    id: 4,
    no: "280+",
    title: " Question Solved<br /> LeetCode",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023 - PRESENT",
    title: "Software Development Engineer intern <span> Code Inbound </span>",
    desc: "I am currently working on a Network Management System application, and my role involves working on the backend using NestJS",
  },

  // {
  //   id: 2,
  //   category: "experience",
  //   icon: <FaBriefcase />,
  //   year: "2013 - 2018",
  //   title: "UI/UX Designer <span> Themeforest </span>",
  //   desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  // },

  // {
  //   id: 3,
  //   category: "experience",
  //   icon: <FaBriefcase />,
  //   year: "2005 - 2013",
  //   title: "Consultant <span> Videohive </span>",
  //   desc: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
  // },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "B.Tech Degree <span> Jabalpur Engineering College </span>",
    desc: "I completed my degree in Computer Science and Engineering with a total CGPA of 7.73",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018",
    title: "Class XII <span> Vandana Public School </span>",
    desc: "I completed my XII class from RBSE, one of the toughest boards, with a score of 78.80%",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2016",
    title: "Class X <span> Army Public School </span>",
    desc: "I completed my X class from CBSE with a CGPA of 9",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "65",
  },
  {
    id: 3,
    title: "Css",
    percentage: "72",
  },

  {
    id: 2,
    title: "JavaScript",
    percentage: "83",
  },
  {
    id: 9,
    title: "TypeScript",
    percentage: "42",
  },

  {
    id: 6,
    title: "MongoDB",
    percentage: "62",
  },

  {
    id: 7,
    title: "Express",
    percentage: "67",
  },
  {
    id: 4,
    title: "React",
    percentage: "66",
  },
  {
    id: 5,
    title: "Node",
    percentage: "73",
  },

  {
    id: 8,
    title: "NestJS",
    percentage: "37",
  },
  {
    id: 10,
    title: "PostgreSQL",
    percentage: "58",
  },
  {
    id: 11,
    title: "SQL",
    percentage: "67",
  },
  {
    id: 12,
    title: "TypeORM",
    percentage: "39",
  },
  {
    id: 13,
    title: "Java",
    percentage: "76",
  },
  {
    id: 14,
    title: "Python",
    percentage: "69",
  },
  {
    id: 15,
    title: "C/C++",
    percentage: "83",
  },
];

export const portfolio = [
  {
    id: 4,
    img: Work4,
    title: "Mern App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Messaging App",
      },
      // {
      //   icon: <FiUser />,
      //   title: "Client : ",
      //   desc: "Dribble",
      // },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN stack with Socket.IO",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://chit-chat-7zvx.onrender.com/",
      },
    ],
  },
  {
    id: 1,
    img: Work1,
    title: "MERN App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Food Ordering App",
      },
      // {
      //   icon: <FiUser />,
      //   title: "Client : ",
      //   desc: "Dribble",
      // },
      {
        icon: <FaCode />,
        title: "Tech Used: ",
        desc: "MERN stack",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://bhojanalay.netlify.app/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "MERN App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Ecommerce App",
      },
      // {
      //   icon: <FiUser />,
      //   title: "Client : ",
      //   desc: "Dribble",
      // },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN stack",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://github.com/Amish-pratap/Ecommerce-App",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Game Using Matter.js",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "MAZE Puzzle",
      },
      // {
      //   icon: <FiUser />,
      //   title: "Client : ",
      //   desc: "Dribble",
      // },
      {
        icon: <FaCode />,
        title: "Languages : ",
        desc: "HTML, CSS , JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://maze-puzzle.netlify.app/",
      },
    ],
  },

  // {
  //   id: 5,
  //   img: Work5,
  //   title: "Landing Page",
  //   details: [
  //     {
  //       title: "Project : ",
  //       desc: "Website",
  //     },
  //     {
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       title: "Language : ",
  //       desc: "React JS, Node JS",
  //     },
  //     {
  //       title: "Preview : ",
  //       desc: "www.dribble.com",
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: "Photo Editing",
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: "Project : ",
  //       desc: "Photo",
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: "Language : ",
  //       desc: "Adobe Photoshop",
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: "Preview : ",
  //       desc: "www.dibble.com",
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
