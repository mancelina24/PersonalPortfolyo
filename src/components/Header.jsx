import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import { ENGLISH, languageEng } from "../api/dataEng.js";
import { TURKCE, languageTr } from "../api/dataTr.js";

import Switch from "@mui/material/Switch";

const Header = () => {
  const label = { inputProps: { "aria-label": "Size switch demo" } };

  const { languageChange, toggleTheme, language, themeName, darkMode } =
    useContext(UserContext);
  return (
    <header className="flex flex-row justify-end items-center bg-none pr-10">
      <div className="flex cursor-pointer">
        <label>{themeName}</label>
        <Switch
          {...label}
          checked={darkMode}
          onChange={toggleTheme}
          sx={{
            width: 55,
            height: 24,
            padding: 0,
            display: "flex",
            "& .MuiSwitch-thumb": {
              backgroundColor: /*darkMode ? "#8F88FF" :*/ "#FFE86E", // Thumb (circle) color change
              width: 15, // Thumb (circle) width
              height: 15, // Thumb (circle) height
              //transform: "translateX(15px)", // Slightly shift the thumb for better alignment
              transform: "translateY(-7px)", // Slightly shift the thumb for better alignment
            },
            // "& .MuiSwitch-switchBase.Mui-checked": {
            //   transform: "translateY(2px)",
            // },
            "& .MuiSwitch-track": {
              backgroundColor: darkMode ? "red" : "#8F88FF", // Track (main background) color change
              borderRadius: "9999px", // Keep the track rounded
              width: 60, // Thumb (circle) width
              height: 20, // Thumb (circle) height
            },
          }}
        />
      </div>
      <div className="flex flex-row">
        <label onClick={languageChange}>
          {language === TURKCE
            ? languageEng.tr + languageEng.ekTr
            : languageTr.ekEng + languageTr.eng}
        </label>
      </div>
    </header>
  );
};

export default Header;
