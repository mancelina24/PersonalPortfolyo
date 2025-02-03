import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { footerEng } from "../api/dataEng.js";
import { TURKCE, footerTr } from "../api/dataTr.js";

const Footer = () => {
  const { language, darkMode, languageClass, darkModeClass } =
    useContext(UserContext);

  return (
    <div>
      <div
        className="relative w-[541.53px] h-[126px] left-[341px] top-[2784px] dark:text-white sm:w-full sm:h-auto sm:left-0 
  text-[#0A0A14] text-[42px] leading-[63px] tracking-[1%] font-inter font-medium text-right 
  sm:text-[32px] sm:leading-[48px] sm:tracking-[0.5%] md:text-[36px] md:leading-[54px] md:tracking-[0.75%] 
  lg:text-[40px] lg:leading-[60px] lg:tracking-[1%] xl:text-[42px] xl:leading-[63px] xl:tracking-[1%] "
      >
        {language === TURKCE ? footerEng.text1 : footerTr.text1}

        <br />
        {language === TURKCE ? footerEng.text2 : footerTr.text2}
      </div>
      <div>
        <a
          className="text-[#1769FF] text-2xl leading-[36px] font-inter hover:underline cursor-pointer
    sm:text-[20px] sm:leading-[30px] 
    md:text-[22px] md:leading-[32px] 
    lg:text-[24px] lg:leading-[36px] 
    xl:text-[26px] xl:leading-[38px]"
          href="https://github.com/mancelina24"
          target="_blank"
        >
          Github
        </a>
        <a
          className="text-[#0A0A14] text-2xl leading-[36px] font-inter  hover:underline cursor-pointer dark:text-white
    sm:text-[20px] sm:leading-[30px] 
    md:text-[22px] md:leading-[32px] 
    lg:text-[24px] lg:leading-[36px] 
    xl:text-[26px] xl:leading-[38px]"
          href=""
          target="_blank"
        >
          {language === TURKCE ? "Personal Blog" : "Kişisel Blog"}
        </a>
        <a
          className="text-[#0077B5] text-2xl leading-[36px] font-inter hover:underline cursor-pointer
    sm:text-[20px] sm:leading-[30px] 
    md:text-[22px] md:leading-[32px] 
    lg:text-[24px] lg:leading-[36px] 
    xl:text-[26px] xl:leading-[38px]"
          href="https://www.linkedin.com/in/feyza-trky/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="text-[#AF0C48] text-2xl leading-[36px] font-inter hover:underline cursor-pointer
    sm:text-[20px] sm:leading-[30px] 
    md:text-[22px] md:leading-[32px] 
    lg:text-[24px] lg:leading-[36px] 
    xl:text-[26px] xl:leading-[38px]"
          href="fturkay.2107@gmail.com"
          target="_blank"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default Footer;
