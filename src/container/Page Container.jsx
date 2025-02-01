import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const PageContainer = ({ children }) => {
  const { darkMode, language } = useContext(UserContext);
  const languageClass =
    language === "turkish" ? "lang-turkish" : "lang-english";
  const darkModeClass = darkMode ? "dark" : "";

  return (
    <div className={`${darkModeClass} ${languageClass}`}>
      <div
        className={`min-h-screen bg-white ${
          darkMode ? "dark:bg-gray-900 dark:text-white" : "bg-white text-black"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
