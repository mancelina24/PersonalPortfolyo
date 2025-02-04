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
      <div className="flex flex-col items-center gap-5">
        <div>
          <h1 className="text-4xl leading-snug pt-5 pb-10 font-medium text-center">
            {language === TURKCE ? projectsEng.title : projectsTr.title}
          </h1>
        </div>

        <div className="w-[45%]">
          <Card className="flex flex-row gap-20 h-auto">
            {selectedProjects.map((desc) => (
              <Card.Body key={desc.id}>
                <Card.Title className="font-playfair text-3xl my-8">
                  {desc.title}
                </Card.Title>
                <Card.Text className="my-8 ">{desc.desc}</Card.Text>
                <div>
                  {desc.teknologies.map((tech, index) => (
                    <Button
                      key={index}
                      variant="outline-primary"
                      className="w-[89px] h-[32] py-2 px-4 my-3 border border-blue-500 text-[#FFFFFF] hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-[76px] dark:"
                      type="button"
                      onClick={() => console.log(`${tech} button clicked`)}
                      style={{ display: "inline-block", cursor: "pointer" }}
                    >
                      {tech}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-between my-8">
                  {" "}
                  <Card.Link href={desc.github}>View on Github</Card.Link>
                  <Card.Link href={desc.goto}>Go to app</Card.Link>
                </div>

                <Card.Img
                  variant="top"
                  src={desc.img}
                  className="w-45% h-80 object-cover mb-2"
                />
              </Card.Body>
            ))}
          </Card>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Projects;
