import codepen from "../assets/footer/codepen.png";
import instagram from "../assets/footer/instagram.png";
import mail from "../assets/footer/mail.png";
import twitter from "../assets/footer/twitter.png";

import Figma from "../assets/skills/Figma.png";
import js from "../assets/skills/js.png";
import node from "../assets/skills/node.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import vscode from "../assets/skills/vscode.png";

import Github from "../assets/hero/Github.png";
import Linkedin from "../assets/hero/Linkedin.png";
import resim from "../assets/hero/resim.png";

export const ENGLISH = "english";

export const languageEng = {
  tr: "TÜRKÇE",
  ekTr: "'YE GEÇ",
};
export const toggleLanguageEng = {
  engDark: "DARK MODE",
  engLight: "LIGHT MODE",
};

export const hero = {
  heroTitle: "I am a Frontend Developer...",
  heroDesc:
    "...who likes to craft solid and scalable frontend products with great user experiences.",
  githubLink: "https://github.com/mancelina24",
  linkedinLink: "https://www.linkedin.com/in/feyza-trky/",
  img: { imgGithub: Github, imgLinkedin: Linkedin, imgResim: resim },
};

export const skills = {
  title: "Skills",
  description: [
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

export const profile = {
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
export const projects = {
  title: "Projects",
  description: [
    {
      id: 1,
      link: "https://github.com/",
      live: "...",
      heading: "Technological Pizza",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      teknologies: [
        "React",
        "Cypress",
        "Vercel",
        "Axios",
        "Toastify",
        "Router",
      ],
    },
    {
      id: 2,
      link: "https://github.com",
      live: "https://dinamik-menu./",
      heading: "Dinamik Menu",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      teknologies: ["React", "Css", "Vercel", "Axios", "Router"],
    },
  ],
};

export const footer = {
  heading1: "Send me a message!",
  heading2: "Got a question or proposal, or just want to say hello? Go ahead.",
  email: "fturkay.2107@gmail.com",
  img: {
    imgTwitter: twitter,
    imgCodepen: codepen,
    imgMail: mail,
    imgInstagram: instagram,
  },
};
