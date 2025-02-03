import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const PageContainer = ({ children }) => {
  const { darkMode, languageClass, darkModeClass } = useContext(UserContext);

  return (
    <div className={`flex justify-center ${darkModeClass} ${languageClass}`}>
      <div
        className={`w-[1440px] h-[3094px] left-[-720px] top-[-1547px] bg-white ${
          darkMode ? "dark:bg-gray-900 dark:text-white" : "bg-white text-black"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
