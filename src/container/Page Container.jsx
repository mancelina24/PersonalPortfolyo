import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const PageContainer = ({ children }) => {
  const { darkMode, languageClass, darkModeClass } = useContext(UserContext);

  return (
    <div className={`${darkModeClass} ${languageClass}`}>
      <div
        className={`w-[1440px] h-[3094px] left-[2541px] top-[-1644px] bg-white ${
          darkMode ? "dark:bg-gray-900 dark:text-white" : "bg-white text-black"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
