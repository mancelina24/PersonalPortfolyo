import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { footerEng } from "../api/dataEng.js";
import { TURKCE, footerTr } from "../api/dataTr.js";

const Footer = () => {
  const { language } = useContext(UserContext);

  return (
    <footer className="flex flex-col md:flex-row justify-center items-center gap-10 mt-8">
      <div
        className=" dark:text-white  relative
  text-[#0A0A14] text-3xl md:text-[42px] leading-[63px] tracking-[1%] font-inter font-medium text-right z-10
 "
      >
        <p>{language === TURKCE ? footerEng.text1 : footerTr.text1}</p>

        <p>{language === TURKCE ? footerEng.text2 : footerTr.text2}</p>
        <span className=" absolute w-[148px] h-[31px] top-[1500px] left-[341px] bg-[#E92577] rounded-e-sm z-0 hidden"></span>
      </div>
      <div className="flex flex-col justify-center items-center">
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
    </footer>
  );
};

export default Footer;
