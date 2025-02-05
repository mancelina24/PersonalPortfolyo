import Figma from "../assets/skills/Figma.png";
import js from "../assets/skills/js.png";
import node from "../assets/skills/node.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import vscode from "../assets/skills/vscode.png";

import resim from "../assets/hero/resim.png";
import r1 from "../assets/projects/r1.png";
import r2 from "../assets/projects/r2.png";

export const TURKCE = "turkish";

export const languageTr = {
  eng: "ENGLISH",
  ekEng: "SWITCH TO ",
};
export const toggleLanguageTr = {
  trDark: "KARANLIK MOD",
  trLight: "AYDINLIK MOD",
};

export const heroTr = {
  heroTitle: "Merhaba 👋",
  heroDesc:
    "Ben Feyza. Yüksek kaliteli ve ölçeklenebilir frontend ürünler üretebilirim. Hadi tanışalım! ",
  heroDetail1: "Şu anda",
  heroDetail11: "Freelance",
  heroDetail12: "olarak",
  heroDetail13: "UX, UI, & Web Design",
  heroDetail14: "Projesinde çalışıyorum.",

  heroDetail2: "Beni ekibinize katılmaya davet edin",
  heroDetail3: "fturkay.2107@gmail.com",
  githubLink: "https://github.com/mancelina24",
  linkedinLink: "https://www.linkedin.com/in/feyza-trky/",
  img: resim,
};

export const skills = {
  title: "Yetenekler",
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

export const profileTr = {
  profile: "Profil",
  basicInfo: "Temel Bilgiler",
  date: "Doğum Tarihi",
  dateDetail: "19.05.1980",
  city: "Şehir",
  cityDetail: "İstanbul",
  uni: "Eğitim Durumu",
  uniDetail1:
    "Marmara Üni., İnovasyon ve Girişimcilik Ekonomisi, Yüksek Lisans 2021",
  uniDetail2:
    "Yıldız Teknik Üniversitesi, Jeodezi ve Fotogrametri Mühendisliği, Lisans 2006",
  prefer: "Tercih",
  preferDetail: "Frontend Geliştirici",
  about: "Hakkımda",
  aboutText1:
    "Türkçe 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
  aboutText2:
    "Türkçe 2 Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
};
export const projectsTr = {
  title: "Projeler",
  description: [
    {
      id: 1,
      title: "Pizza Projesi",
      desc: "Türkçe Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      github: "https://github.com/mancelina24/Login-proje",
      goto: "https://fsweb-s8-challenge-pizza-amber.vercel.app",
      heading: "Technological Pizza",

      teknologies: ["React", "Router", "Vercel", "Axios"],
      img: r1,
    },
    {
      id: 2,
      title: "Login olma Formu",
      desc: "Türkçe Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
      github: "https://github.com/mancelina24/Login-proje",
      goto: "https://login-proje-ncb65nuag-feyzas-projects-c9e5986b.vercel.app",
      teknologies: ["React", "Axios", "Router", "HTML", "Vercel"],
      img: r2,
    },
  ],
};

export const footerTr = {
  text1: "Hadi yeni Projeni",
  text2: "birlikte yapalım!",
};
