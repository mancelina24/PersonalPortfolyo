import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { ENGLISH, languageEng } from "../api/dataEng.js";
import { TURKCE, languageTr } from "../api/dataTr.js";
import { RxSwitch } from "react-icons/rx";

const Header = () => {
  const { languageChange, toggleTheme, language, themeName } =
    useContext(UserContext);
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Feyza Türkay</h1>
      </div>
      <div>
        <label onClick={languageChange}>
          {language === TURKCE
            ? languageEng.tr + languageEng.ekTr
            : languageTr.ekEng + languageTr.eng}
        </label>
        <RxSwitch size={42} />
        <label>
          <input onClick={toggleTheme} />

          {themeName}
        </label>
      </div>
    </div>
  );
};

export default Header;
