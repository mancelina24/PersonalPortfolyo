import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

const Profile = () => {
  const { language, darkMode } = useContext(UserContext);
  return (
    <article
      className={`h-[546px] ${
        darkMode
          ? "dark:bg-[#2A262B] dark:text-white"
          : "bg-[#f4f4f4] text-black"
      }`}
    >
      <h1>Profile</h1>
      <div>
        <div>Basic Information</div>
        <div>About Me</div>{" "}
      </div>
    </article>
  );
};

export default Profile;
