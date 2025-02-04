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
    <header className="relative">
      <div className=" absolute bottom-2 left: md:bottom-0 md:left-230 flex bg-none border-none ">
        <div className="flex flex-row cursor-pointer pr-4 font-bold  ">
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
            <span className="text-[#EA2678] font-bold">
              {language === TURKCE ? languageEng.tr + languageEng.ekTr : ""}
            </span>
            <span className="text-[#EA2678] font-bold">
              {language === TURKCE ? "" : languageTr.ekEng + languageTr.eng}
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
