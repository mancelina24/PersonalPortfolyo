import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { projectsEng } from "../api/dataEng";
import { TURKCE, projectsTr } from "../api/dataTr";

import { UserContext } from "../contexts/UserContext";

export const Project = () => {
  const { language } = useContext(UserContext);
  const selectedProjects =
    language === TURKCE ? projectsEng.description : projectsTr.description;
  return (
    <Card className="w-[40rem] flex flex-row justify-center items-center">
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
                type="submit"
              >
                {tech}
              </Button>
            ))}
          </div>

          <Card.Img variant="top" src={desc.img} />
        </Card.Body>
      ))}
    </Card>
  );
};
export default Project;
