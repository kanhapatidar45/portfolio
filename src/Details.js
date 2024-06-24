// Enter all your detials in this file
// Logo images

import logo from "./assets/photo2.jpeg";
// Profile Image
import profile from "./assets/photo1.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/password.png";
import projectImage2 from "./assets/projects/game.png";
import projectImage3 from "./assets/projects/weather api.png";


// Logos
export const logos = {
  logo:logo
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Kanha Patidar",
  tagline: "I am Full stack Developer",
  img:profile ,
  about: `I'm a passionate Full Stack Developer with expertise in the MERN stack (MongoDB, Express, React, Node.js). I enjoy building dynamic, responsive web applications and have experience in front-end and back-end development, API integration, and creating seamless user experiences.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/kanha-patidar-a77086222/",
  github: "https://github.com/kanhapatidar45",
 
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Web Developer",
    Company: `Intern Crowd Pvt Ltd`,
    Location: "Indore",
    Type: "Internship",
    Duration: "Aug 2023 - Sep 2023",
  }

];

// Enter your Education Details here
export const eduDetails = [
 
  {
    Position: "Bachelor in Computer Science & Engineering",
    Company: `IPS Academy Indore`,
    Location: "Indore",
    Type: "Full Time",
    Duration: "Aug 2021 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Password Generator",
    image: projectImage1,
    description: `Developed a random password generator using HTML, CSS, and JavaScript, allowing users to create secure passwords with customizable length and character options. Showcased skills in front-end development and JavaScript programming.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://passwrod-generator.netlify.app/",
   
  },
  {
    title: "Tic Tac Toe",
    image: projectImage2,
    description: `Created a Tic Tac Toe game using HTML, CSS, JavaScript, and React.js, featuring a responsive design and AI opponent. Demonstrated skills in front-end development and interactive UI design.`,
    techstack: "HTML/CSS, JavaScript React.js",
    previewLink: "https://tic-tac-toe-34game.netlify.app/",
   
  },
  {
    title: "Weather App",
    image: projectImage3,
    description: `Developed a responsive weather app using HTML, CSS, JavaScript, and React.js, integrating OpenWeatherMap API for real-time weather updates and dynamic backgrounds. Showcased front-end development and API integration skills.`,
    techstack: "HTML/CSS, JavaScript,Reactjs,Redux,Api",
    previewLink: "https://weather-api34.netlify.app/",
   
   
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "kanha.pub45@gmail.com",
  phone: "+91 7489071851",
};
