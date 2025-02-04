import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import Card from "react-bootstrap/Card";

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
      <h1> {language === TURKCE ? profileEng.profile : profileTr.profile}</h1>
      <div>
        <div>
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>About Me</div>{" "}
      </div>
    </article>
  );
};

export default Profile;
