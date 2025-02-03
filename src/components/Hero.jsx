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
      className={` relative w-[1440] h-[738px] flex justify-center flex-col ${
        darkMode
          ? "dark:bg-[#2A262B] dark:text-white"
          : "bg-[#f4f4f4] text-black"
      }`}
    >
      <div className=" absolute flex flex-row w-[359px] h-[38px] top-[63px] left-[924px] ">
        <Header />
      </div>
      <div className="w-[1107px] h-[493px] top-[151px] left-[162px] gap-8 flex flex-row justify-center">
        <div className="gap-8 ">
          <div className="w-[679px] h-[313px] top-[151px] left-[162px] font-inter ">
            <div className="w-[200px] h-[36px] top-[151px] left-[174px]">
              {" "}
              <p className=" font-inter text-[1.875rem]  leading-[2.27 rem] tracking-[10%]">
                {language === TURKCE ? heroEng.heroTitle : heroTr.heroTitle}
              </p>
            </div>
            <br />
            <div className="w-[666px] h-[256px] top-[208px] left-[175px] ">
              <p className=" font-inter text-[2.625rem] leading-[4 rem] tracking-[1%]">
                {" "}
                {language === TURKCE ? heroEng.heroDesc : heroTr.heroDesc}
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[540px] h-[122.57px] top-[550.43px] left-[174px] gap-2 mt-15">
            <div className="flex flex-row gap-1">
              <div
                className={`w-[31px] h-[33.95px] top-[521.43px] left-[178px] `}
              >
                <a
                  href={heroTr.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={25} />
                </a>
              </div>
              <div className="w-[34px] h-[36.14px] top-[522.53px] left-[229px]">
                <a
                  href={heroTr.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={25} />
                </a>
              </div>
            </div>
            <div className="w-[540px] h-[64px] top-[580px] left-[174px]">
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
        <div className=" absolute w-[341px] h-[341px] top-[207px] left-[928px] rounded-sm">
          <img src={heroTr.img} />{" "}
        </div>
      </div>
    </main>
  );
};

export default Hero;
