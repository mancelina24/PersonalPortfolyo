import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { ENGLISH, languageEng } from "../api/dataEng.js";
import { TURKCE, languageTr } from "../api/dataTr.js";

const Header = () => {
  const { languageChange, toggleTheme, language, themeName } =
    useContext(UserContext);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Feyza Türkay</h1>
      <div>
        <label>
          <input onClick={toggleTheme} />

          {themeName}
        </label>

        <label onClick={languageChange}>
          {language === TURKCE
            ? languageEng.tr + languageEng.ekTr
            : languageTr.ekEng + languageTr.eng}
        </label>
      </div>
    </div>
  );
};

export default Header;
