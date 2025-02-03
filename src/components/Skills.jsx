import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { TURKCE, skills } from "../api/dataTr.js";

const Skills = () => {
  const { language, darkMode, languageClass, darkModeClass } =
    useContext(UserContext);
  return (
    <div
      className={`w-[1440px] h-[497px] top-[731px] flex justify-center flex-col gap-8 ${
        darkMode ? "dark:bg-[#484148] dark:text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-[942px] h-[280px] top-[818px] left-[259px]">
        <div className="w-[122px] h-[58px] left-[658px] top-[818px] text-[48px] leading-[58.09px] tracking-[1%] font-inter ">
          {language === TURKCE ? "Skills" : "Yetenekler"}
        </div>
        <div className="flex justify-center flex-row">
          {skills.desc.map((skill) => (
            <div key={skill.id} className="flex items-center px-4 py-2">
              <div className="flex justify-center flex-col items-center gap-2 font-inter">
                <img src={skill.img} className="w-12 h-12" />
                <p
                  className={`${
                    darkMode ? "dark:text-[#d9d9d9]" : "text-[#777777]"
                  }`}
                >
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
