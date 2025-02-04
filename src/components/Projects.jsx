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
      className={`h-[1315px] flex flex-col justify-center  ${
        darkMode
          ? "dark:bg-[#484148] dark:text-[#f4f4f4]"
          : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col justify-center items-center ">
        <div>
          <h1 className="mt-1  font-inter font-medium text-[36px] ">
            Projects
          </h1>
        </div>
        <Card className="">
          {selectedProjects.map((desc) => (
            <Card.Body key={desc.id} className="">
              <Card.Title>{desc.title}</Card.Title>
              <Card.Text>{desc.desc}</Card.Text>
              <div>
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
                className="w-45% h-90 object-cover mb-2"
              />
            </Card.Body>
          ))}
        </Card>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Projects;
