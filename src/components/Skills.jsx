import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { TURKCE, skills } from "../api/dataTr.js";

const Skills = () => {
  const { language, darkMode } = useContext(UserContext);
  return (
    <section
      className={`h-[497px] flex flex-col justify-center items-center gap-8 ${
        darkMode
          ? "dark:bg-[#484148] dark:text-[#f4f4f4]"
          : "bg-white text-black"
      }`}
    >
      <div>
        <p
          className=" text-3xl md:text-5xl leading-[58.09px] tracking-[1%]  font-medium text-center "
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {" "}
          {language === TURKCE ? "Skills" : "Yetenekler"}
        </p>
      </div>
      <figure className="grid grid-cols-2 gap-2 md:flex md:flex-row lg:gap-[35px]">
        {skills.desc.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center px-4 py-2"
          >
            <img src={skill.img} className="w-10 h-10 lg:w-20 lg:h-20 mb-2" />
            <p
              className={`font-medium text-center text-2xl ${
                darkMode ? "dark:text-[#d9d9d9]" : "text-[#777777]"
              }`}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </figure>
    </section>
  );
};

export default Skills;
