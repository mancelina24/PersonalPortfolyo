import Figma from "../assets/skills/Figma.png";
import js from "../assets/skills/js.png";
import node from "../assets/skills/node.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import vscode from "../assets/skills/vscode.png";

import resim from "../assets/hero/resim.png";
import r1 from "../assets/projects/r1.png";
import r2 from "../assets/projects/r2.png";
export const ENGLISH = "english";

export const languageEng = {
  tr: "TÜRKÇE",
  ekTr: "'YE GEÇ",
};
export const toggleLanguageEng = {
  engDark: "DARK MODE",
  engLight: "LIGHT MODE",
};

export const heroEng = {
  heroTitle: "Hi 👋",
  heroDesc:
    "I’m Feyza. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
  heroDetail1: "Currently",
  heroDetail11: " Freelancing",
  heroDetail12: " for ",
  heroDetail13: "UX, UI, & Web Design ",
  heroDetail14: "Project.",
  heroDetail2: "Invite me to join your team",
  heroDetail3: "fturkay.2107@gmail.com",
  githubLink: "https://github.com/mancelina24",
  linkedinLink: "https://www.linkedin.com/in/feyza-trky/",
  img: resim,
};

export const skills = {
  title: "Skills",
  desc: [
    {
      id: 1,
      name: "JAVASCRIPT",
      img: js,
    },
    {
      id: 2,
      name: "REACT",
      img: react,
    },
    {
      id: 3,
      name: "REDUX",
      img: redux,
    },
    {
      id: 4,
      name: "NODE",
      img: node,
    },

    {
      id: 5,
      name: "VSCODE",
      img: vscode,
    },
    {
      id: 6,
      name: "FIGMA",
      img: Figma,
    },
  ],
};

export const profileEng = {
  profile: "Profile",
  basicInfo: "Basic information",
  birthday: "Birthday",
  birthdayDetail: "19.05.1980",
  city: "City",
  cityDetail: "İstanbul",
  uni: "Education Status",
  uniDetail1:
    "Marmara University, Inovation and Startup Economy, Master Degree",
  uniDetail2: "Yıldız Technical University, Map Engineer, Bachelor's Degree",
  prefer: "Preferred Role",
  preferD: "Frontend Developer",
  aboutH: "About Me",
  aboutText1: "dfgdfgdfhdfhfhfghlşfjlhjfşhjfhkfjşhjfşhfşhjfşlhjfşh",
  aboutText2: "dfgdfgdfhdfhfhfghlşfjlhjfşhjfhkfjşhjfşhfşhjfşlhjfşh",
};
export const projectsEng = {
  title: "Projects",
  description: [
    {
      id: 1,
      title: "Pizza Project",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      github: "https://github.com/mancelina24/Login-proje",
      goto: "https://fsweb-s8-challenge-pizza-amber.vercel.app",
      heading: "Technological Pizza",

      teknologies: [
        "React",
        "Cypress",
        "Vercel",
        "Axios",
        "Toastify",
        "Router",
      ],
      img: r1,
    },
    {
      id: 2,
      title: "Login Form",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      github: "https://github.com/mancelina24/Login-proje",
      goto: "https://login-proje.vercel.app",
      teknologies: ["React", "Axios", "Router", "Css", "Vercel"],
      img: r2,
    },
  ],
};

export const footerEng = {
  text1: "Let's work Together on",
  text2: "your next Product.",
};
