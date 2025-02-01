import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ENGLISH, toggleLanguageEng } from "../api/dataEng";
import { TURKCE, toggleLanguageTr } from "../api/dataTr";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("theme", false);
  const [language, setLanguage] = useLocalStorage("lang", "tr");
  const [themeName, setThemeName] = useState("");

  const updateThemeName = (darkMode, language) => {
    if (language === TURKCE) {
      return darkMode ? toggleLanguageEng.engLight : toggleLanguageEng.engDark;
    } else {
      return darkMode ? toggleLanguageTr.trLight : toggleLanguageTr.trDark;
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    setThemeName(updateThemeName(newDarkMode, language));
  };

  const languageChange = () => {
    const newLanguage = language === TURKCE ? ENGLISH : TURKCE;
    setLanguage(newLanguage);
    setThemeName(updateThemeName(darkMode, newLanguage));
  };
  useEffect(() => {
    setThemeName(updateThemeName(darkMode, language));
  }, [darkMode, language]);

  return (
    <UserContext.Provider
      value={{
        languageChange,
        toggleTheme,
        darkMode,
        language,
        themeName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
