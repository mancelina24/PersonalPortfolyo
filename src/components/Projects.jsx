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
      className={`h-[2250px] md:h-[1315px] flex flex-col justify-center  ${
        darkMode
          ? "dark:bg-[#484148] dark:text-[#f4f4f4]"
          : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <div>
          <h1 className="text-3xl md:text-5xl leading-[58.09px] tracking-[1%] font-inter font-medium text-center ">
            {language === TURKCE ? projectsEng.title : projectsTr.title}
          </h1>
        </div>

        <div className="w-[90%] lg:w-[70%]">
          <Card className="flex flex-col md:flex-row gap-20 h-auto ">
            {selectedProjects.map((desc) => (
              <Card.Body
                key={desc.id}
                className="bg-[#DDEEFE] dark:bg-[#2D3235] p-8 rounded-3xl"
              >
                <Card.Title
                  className="text-3xl my-8 font-bold"
                  style={{
                    fontFamily: "Playfair Display",
                  }}
                >
                  {desc.title}
                </Card.Title>
                <Card.Text
                  className="my-8 "
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {desc.desc}
                </Card.Text>
                <div>
                  {desc.teknologies.map((tech, index) => (
                    <Button
                      key={index}
                      variant="outline-primary"
                      className="w-[91px] h-[32] py-2 px-4 my-3 mr-5 border bg-[#FFFFFF] border-none text-[#000000] hover:bg-[#EA2678] hover:text-black transition-all duration-300 rounded-[76px] font-bold text-base leading-[1rem] tracking-[5%] "
                      type="button"
                      onClick={() => console.log(`${tech} button clicked`)}
                      style={{
                        display: "inline-block",
                        cursor: "pointer",
                        fontFamily: "Playfair Display",
                      }}
                    >
                      {tech}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-between my-8 font-bold ">
                  {" "}
                  <Card.Link href={desc.github} className="hover:bg-[#EA2678]">
                    View on Github
                  </Card.Link>
                  <Card.Link href={desc.goto} className="hover:bg-[#EA2678]">
                    {" "}
                    Go to app →
                  </Card.Link>
                </div>

                <Card.Img
                  variant="top"
                  src={desc.img}
                  className="w-45% h-80 object-cover mb-2 rounded-2xl"
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
