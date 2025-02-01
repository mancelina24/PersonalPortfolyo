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

export const TURKCE = "turkish";

export const languageTr = {
  eng: "ENGLISH",
  ekEng: "SWITCH TO ",
};
export const toggleLanguageTr = {
  trDark: "KARANLIK MOD",
  trLight: "AYDINLIK MOD",
};

export const hero = {
  heroTitle: "Ben bir Frontend Geliştiriciyim...",
  heroDesc:
    "...ve harika kullanıcı deneyimleri sunan, sağlam ve ölçeklenebilir frontend ürünleri geliştirmeyi seven biriyim.",
  githubLink: "https://github.com/mancelina24",
  linkedinLink: "https://www.linkedin.com/in/feyza-trky/",
  img: { imgGithub: Github, imgLinkedin: Linkedin, imgResim: resim },
};

export const skills = {
  title: "Yetenekler",
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
  profile: "Profil",
  basicInfo: "Temel Bilgiler",
  birthday: "Doğum Günü",
  birthdayDetail: "19.05.1980",
  city: "Şehir",
  cityDetail: "İstanbul",
  uni: "Eğitim Durumu",
  uniDetail1:
    "Marmara Üniversitesi, İnovasyon ve Girişimcilik Ekonomisi, Yüksek Lisans",
  uniDetail2:
    "Yıldız Teknik Üniversitesi, Jeodezi ve Fotogrametri Mühendisliği, Lisans",
  prefer: "Tercih Edilen Rol",
  preferD: "Frontend Geliştirici",
  aboutH: "Hakkımda",
  aboutText1: "dfghdfhfgh gdfgdfg",
  aboutText2: "dfghdfhfgh gdfgdfg",
};
export const projects = {
  title: "Projeler",
  description: [
    {
      id: 1,
      src: "",
      link: "https://gite",
      live: "https://p/",
      heading: "Teknolojik Pizza",
      desc: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam",
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
      src: "",
      link: "https://gith",
      live: "https://d/",
      heading: "Dinamik Menü",
      desc: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam",
      teknologies: ["React", "CSS", "Vercel", "Axios", "Router"],
    },
  ],
};

export const footer = {
  heading1: "Bana bir mesaj gönderin!",
  heading2:
    "Bir sorunuz veya öneriniz mi var ya da sadece merhaba demek mi istiyorsunuz? Hadi yazın.",
  email: "fturkay.2107@gmail.com",
  img: {
    imgTwitter: twitter,
    imgCodepen: codepen,
    imgMail: mail,
    imgInstagram: instagram,
  },
};
