import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";

import Footer from "./Footer.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { projectsEng } from "../api/dataEng";
import { TURKCE, projectsTr } from "../api/dataTr";

const Projects = () => {
  const { language } = useContext(UserContext);
  const selectedProjects =
    language === TURKCE ? projectsEng.description : projectsTr.description;

  return (
    <article className="w-[1440px] h-[1315px] top-[1774px] flex flex-col justify-center items-center">
      <div className="w-[1064px] h-[792px] top-[1856px] flex flex-col justify-center items-center">
        <div className="w-[144px] h-[44px] top-[1856px] ">
          {" "}
          <h1>Projects</h1>
        </div>
        <div className="w-[500px] h-[712px] top-[1936px] flex flex-row justify-center items-center  ">
          <Card>
            {selectedProjects.map((desc) => (
              <Card.Body key={desc.id}>
                <Card.Title>{desc.title}</Card.Title>
                <Card.Text>{desc.desc}</Card.Text>

                <div className="flex flex-wrap gap-2 mt-4">
                  {desc.teknologies.map((tech, index) => (
                    <Button
                      key={index}
                      variant="outline-primary"
                      className="py-2 px-4"
                      type="button"
                      onClick={(e) => e.preventDefault()}
                    >
                      {tech}
                    </Button>
                  ))}
                </div>

                <Card.Img
                  variant="top"
                  src={desc.img}
                  className="w-md h-md mb-2"
                />
              </Card.Body>
            ))}
          </Card>
        </div>
      </div>
      <Footer />
    </article>
  );
};

export default Projects;
