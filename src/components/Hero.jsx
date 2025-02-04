import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "./Header.jsx";

import { heroEng } from "../api/dataEng.js";
import { TURKCE, heroTr } from "../api/dataTr.js";

const Hero = () => {
  const { language, darkMode } = useContext(UserContext);
  return (
    <main
      className={` relative h-[738px] flex justify-center flex-col ${
        darkMode
          ? "dark:bg-[#2A262B] dark:text-white"
          : "bg-[#f4f4f4] text-black"
      }`}
    >
      <div>
        <Header />
      </div>
      <div className="flex flex-row justify-center">
        <div>
          <div className="font-inter ">
            <div>
              {" "}
              <p className=" font-inter text-[1.875rem]  leading-[2.27 rem] tracking-[10%]">
                {language === TURKCE ? heroEng.heroTitle : heroTr.heroTitle}
              </p>
            </div>
            <br />
            <div className="w-[666px] h-[256px] ">
              <p className=" font-inter text-[2.625rem] leading-[4 rem] tracking-[1%]">
                {" "}
                {language === TURKCE ? heroEng.heroDesc : heroTr.heroDesc}
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-2 mt-5">
            <div className="flex flex-row gap-1">
              <div className={`w-10 h-10 `}>
                <a
                  href={heroTr.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
              </div>
              <div>
                <a
                  href={heroTr.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
            <div className="">
              <p className="h-[18px]  font-inter font-normal text-[1.125] leading-[2rem] tracking-[5%]">
                {language === TURKCE ? (
                  <>
                    {heroEng.heroDetail1}
                    <span className="mx-1"> </span>
                    <span className="text-[#EA2678]">
                      {heroEng.heroDetail11}
                    </span>
                    <span className="mx-1"> </span>
                    {heroEng.heroDetail12}
                    <span className="mx-1"> </span>
                    <span className="text-[#EA2678]">
                      {heroEng.heroDetail13}
                    </span>
                    <span className="mx-1"> </span>
                    {heroEng.heroDetail14}
                  </>
                ) : (
                  <>
                    {heroTr.heroDetail1}
                    <span className="mx-1"> </span>
                    <span className="text-[#EA2678]">
                      {heroTr.heroDetail11}
                    </span>
                    <span className="mx-1"> </span>
                    {heroTr.heroDetail12}
                    <span className="mx-1"> </span>
                    <span className="text-[#EA2678]">
                      {" "}
                      {heroTr.heroDetail13}
                    </span>
                    <span className="mx-1"> </span>
                    {heroTr.heroDetail14}
                  </>
                )}
              </p>
              <br />
              {language === TURKCE ? heroEng.heroDetail2 : heroTr.heroDetail2}

              <span className="mx-1"> </span>
              <a
                href="mailto:fturkay.2107@gmail.com"
                className="text-[#EA2678] hover:underline"
              >
                {heroTr.heroDetail3}
              </a>
            </div>
          </div>
        </div>
        <div className="my-20 rounded-sm">
          <img src={heroTr.img} />{" "}
        </div>
      </div>
    </main>
  );
};

export default Hero;
