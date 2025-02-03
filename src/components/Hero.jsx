import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

import Header from "./Header.jsx";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";
import { heroEng } from "../api/dataEng.js";
import { TURKCE, heroTr } from "../api/dataTr.js";

const Hero = () => {
  const { language, darkMode, languageClass, darkModeClass } =
    useContext(UserContext);
  return (
    <div
      className={`w-[1440px] h-[738px] ${
        darkMode
          ? "dark:bg-[#2A262B] dark:text-white"
          : "bg-[#f4f4f4] text-black"
      }`}
    >
      <div translate="no" className="flex flex-col ">
        <Header />
      </div>
      <div className="w-[1107px] h-[493px] top-[151px] left-[162px]">
        <div>
          <div>
            <div>
              {" "}
              {language === TURKCE ? heroEng.heroTitle : heroTr.heroTitle}
            </div>
            <div>
              {language === TURKCE ? heroEng.heroDesc : heroTr.heroDesc}
            </div>
          </div>
          <div>
            <div className="flex flex-row">
              <div
                className={`w-[31px] h-[33.95px] top-[521.43px] left-[178px] `}
              >
                <a
                  href={heroTr.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {darkMode ? <BsGithub /> : <TbBrandGithubFilled />}
                </a>
              </div>
              <div
                className={`w-[34px] h-[36.14px] top-[522.53px] left-[229px]`}
              >
                <a
                  href={heroTr.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {darkMode ? <RxLinkedinLogo /> : <FaLinkedinIn />}
                </a>
              </div>
            </div>
            <div className="w-[540px] h-[64px] top-[580px] left-[174px] ">
              {language === TURKCE ? (
                <>
                  {heroEng.heroDetail1}
                  <span className="mx-1"> </span>
                  <span className="text-red-500">{heroEng.heroDetail11}</span>
                  <span className="mx-1"> </span>
                  {heroEng.heroDetail12}
                  <span className="mx-1"> </span>
                  <span className="text-red-500">{heroEng.heroDetail13}</span>
                  <span className="mx-1"> </span>
                  {heroEng.heroDetail14}
                </>
              ) : (
                <>
                  {heroTr.heroDetail1}
                  <span className="mx-1"> </span>
                  <span className="text-[#AF0C48]">{heroTr.heroDetail11}</span>
                  <span className="mx-1"> </span>
                  {heroTr.heroDetail12}
                  <span className="mx-1"> </span>
                  <span className="text-[#AF0C48]"> {heroTr.heroDetail13}</span>
                  <span className="mx-1"> </span>
                  {heroTr.heroDetail14}
                </>
              )}

              <br />
              {language === TURKCE ? heroEng.heroDetail2 : heroTr.heroDetail2}

              <span className="mx-1"> </span>
              <a
                href="mailto:fturkay.2107@gmail.com"
                className="text-[#AF0C48] hover:underline"
              >
                {heroTr.heroDetail3}
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={heroTr.img} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
