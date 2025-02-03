import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import Footer from "./Footer.jsx";
import Project from "./Project.jsx";
const Projects = () => {
  return (
    <article className="w-[1440px] h-[1315px] top-[1774px] left-[5px]">
      <div>
        <div>
          {" "}
          <h1>Projects</h1>
        </div>
        <div>
          <div>
            <Project />
          </div>
          <div>
            {" "}
            <Project />
          </div>
        </div>
      </div>
      <Footer />
    </article>
  );
};

export default Projects;
