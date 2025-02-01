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
    <div className="flex flex-row justify-around">
      <div>
        <h1 className="text-4xl font-bold">Feyza Türkay</h1>
      </div>
      <div className="flex flex-row">
        <label onClick={languageChange}>
          {language === TURKCE
            ? languageEng.tr + languageEng.ekTr
            : languageTr.ekEng + languageTr.eng}
        </label>
        <div className="flex items-center space-x-3">
          <div className="flex items-center cursor-pointer">
            <Switch
              {...label}
              checked={darkMode}
              onChange={toggleTheme}
              sx={{
                "& .MuiSwitch-thumb": {
                  backgroundColor: darkMode ? "#8F88FF" : "#FFE86E", // Thumb (circle) color change
                  width: 15, // Thumb (circle) width
                  height: 15, // Thumb (circle) height
                  transform: "translateX(9px)", // Slightly shift the thumb for better alignment
                  transform: "translateY(5px)", // Slightly shift the thumb for better alignment
                },
                "& .MuiSwitch-track": {
                  backgroundColor: darkMode ? "#FFE86E" : "#8F88FF", // Track (main background) color change
                  borderRadius: "9999px", // Keep the track rounded
                  width: 50, // Thumb (circle) width
                  height: 20, // Thumb (circle) height
                },
              }}
            />
            <label>{themeName}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
