import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

import Footer from "./Footer.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { projectsEng } from "../api/dataEng";
import { TURKCE, projectsTr } from "../api/dataTr";

const Projects = () => {
  const { language, darkMode } = useContext(UserContext);
  const selectedProjects =
    language === TURKCE ? projectsEng.description : projectsTr.description;

  return (
    <section
      className={`w-[1440px] h-[1315px] top-[1774px] flex flex-col justify-center items-center my-0 py-0 ${
        darkMode
          ? "dark:bg-[#484148] dark:text-[#f4f4f4]"
          : "bg-white text-black"
      }`}
    >
      <div className="w-[1064px] h-auto flex flex-col justify-center items-center ">
        <h1 className="w-[144px]  mt-1  font-inter font-medium text-[36px] ">
          Projects
        </h1>

        <Card className="w-45% h-auto top-[1936px] flex flex-row justify-center gap-10 ">
          {selectedProjects.map((desc) => (
            <Card.Body key={desc.id}>
              <Card.Title>{desc.title}</Card.Title>
              <Card.Text>{desc.desc}</Card.Text>
              <div className="flex flex-wrap gap-2 mt-4">
                {desc.teknologies.map((tech, index) => (
                  <Button
                    key={index}
                    variant="outline-primary"
                    className="w-[89px] h-[32] py-2 px-4 border border-blue-500 text-[#FFFFFF] hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-[76px] dark:"
                    type="button"
                    onClick={() => console.log(`${tech} button clicked`)}
                    style={{ display: "inline-block", cursor: "pointer" }}
                  >
                    {tech}
                  </Button>
                ))}
              </div>
              <div className="flex justify-between">
                {" "}
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </div>

              <Card.Img
                variant="top"
                src={desc.img}
                className="w-full h-[200px] object-cover mb-2"
              />
            </Card.Body>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default Projects;
