import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "./Header.jsx";

import { heroEng } from "../api/dataEng.js";
import { TURKCE, heroTr } from "../api/dataTr.js";

import { useQuery } from "@tanstack/react-query";
import { queries } from "../api/queries.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const { language, darkMode } = useContext(UserContext);

  const { data, error, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: queries,
  });
  if (isLoading) {
    toast.info(`Loading...`);
    return <div>Loading...</div>;
  }

  if (error) {
    toast.error(`There are some problem`, { autoClose: 1000 });
    return <div>There are some problem: {error.message}</div>;
  }

  return (
    <main
      className={` relative h-[950px] md:h-[738px] flex justify-center flex-col ${
        darkMode
          ? "dark:bg-[#2A262B] dark:text-white"
          : "bg-[#f4f4f4] text-black"
      }`}
    >
      <div>
        <Header />
      </div>
      <span className="absolute w-25 h-25 top-[-55px] left-[200px] lg:left-[421px] bg-[#D9D9D9] rounded-full lg:block hidden"></span>
      <span className="absolute w-[148px] h-[31px] top-[180px]  md:left-[200px] bg-[#E92577] rounded-e-sm z-0 lg:block hidden"></span>
      <span className="absolute w-[217px] h-[59px] top-[536px] lg:left-[1316px] xl:left-[2300px] bg-[#EA2678] rounded-4xl lg:block hidden"></span>
      <span className="absolute w-30 h-30 top-[900px] md:top-[678px] left-[200px] lg:left-[1038px] bg-transparent border-[21px] border-[#D9d9d9] rounded-full lg:block hidden"></span>
      <span className="absolute w-[181px] h-[49px] top-[1133px] left-[-70px] bg-[#525252] rounded-4xl lg:block hidden"></span>
      <span className="absolute w-30 h-30 top-[1198px] lg:left-[1400px] bg-transparent border-[21px] border-[#EA2678] rounded-full lg:block hidden"></span>

      <div className=" flex flex-col mt-4 ml-8 lg:ml-0 md:mt-0 md:flex-row justify-center gap-20  z-10 ">
        <div>
          <div style={{ fontFamily: "Inter, sans-serif" }}>
            <div>
              {" "}
              <p
                className=" text-[1.875rem] leading-[2.27 rem] tracking-[10%] "
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {language === TURKCE ? heroEng.heroTitle : heroTr.heroTitle}
              </p>
            </div>
            <br />
            <div className="w-[90%] lg:w-[630px] ">
              <p
                className="lg:text-[2.625rem] leading-[4 rem] tracking-[1%] "
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {" "}
                {language === TURKCE ? heroEng.heroDesc : heroTr.heroDesc}
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-2 mt-10">
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
            <div>
              <p
                className="h-[3rem] lg:h-[18px] font-normal text-[1.125] leading-[2rem] tracking-[5%]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
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
        <div className=" my-1 ml-3 mr-5 lg:ml-0 lg:mr-0 md:my-20 rounded-3xl shadow-[-8px_-8px_1px_rgba(233,37,119,1)] md:shadow-[-16px_-16px_2px_rgba(233,37,119,1)]">
          <img
            src={heroTr.img}
            className="w-[100%] h-[100%] ml-0.5 md:ml-0 md:w-[341px] lg:h-[341px] rounded-3xl "
          />{" "}
        </div>
      </div>
    </main>
  );
};

export default Hero;
