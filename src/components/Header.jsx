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
      <div className="flex cursor-pointer mr-4">
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
              backgroundColor: "#FFE86E",
              width: 15, // Thumb (circle) width
              height: 16, // Thumb (circle) height
              transform: "translateY(-6px)",
            },

            "& .MuiSwitch-track": {
              backgroundColor: darkMode ? "red" : "#EA2678",
              borderRadius: "9999px", // Keep the track rounded
              width: 55, // Thumb (circle) width
              height: 24, // Thumb (circle) height
            },
          }}
        />
        <label className="ml-2">{themeName}</label>
      </div>
      <span className="font-bold pr-4"> | </span>
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
