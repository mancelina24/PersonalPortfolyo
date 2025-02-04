import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.jsx";
import Card from "react-bootstrap/Card";

import { profileEng } from "../api/dataEng";
import { TURKCE, profileTr } from "../api/dataTr";

const Profile = () => {
  const { language, darkMode } = useContext(UserContext);
  return (
    <article
      className={`h-[546px] flex flex-col justify-center items-center gap-5 ${
        darkMode
          ? "dark:bg-[#2A262B] dark:text-white"
          : "bg-[#f4f4f4] text-black"
      }`}
    >
      <h1 className="text-5xl leading-[58.09px] tracking-[1%] font-inter font-medium text-center ">
        {" "}
        {language === TURKCE ? profileEng.profile : profileTr.profile}
      </h1>
      <div className="flex flex-row w-[45%] gap-15">
        <div className="relative flex flex-col w-[32rem] h-[18rem] rounded-2xl border-none bg-white shadow-[10px_10px_2px_rgba(82,82,82,0.6)] dark:bg-[#525252] dark:shadow-[10px_10px_2px_rgba(82,82,82,0.5)]">
          {" "}
          <Card className="flex flex-col p-2 m-2">
            <Card.Body>
              <Card.Title className="text-[#EA2678]">
                {language === TURKCE
                  ? profileEng.basicInfo
                  : profileTr.basicInfo}
              </Card.Title>
              <div className="flex flex-row gap-2">
                <Card.Subtitle className="mb-2 text-muted w-[12rem]">
                  <p>
                    {language === TURKCE ? profileEng.date : profileTr.date}
                  </p>
                  <p>
                    {language === TURKCE ? profileEng.city : profileTr.city}
                  </p>
                  <p>{language === TURKCE ? profileEng.uni : profileTr.uni}</p>
                  <p>-</p>
                  <p>
                    {language === TURKCE ? profileEng.prefer : profileTr.prefer}
                  </p>
                </Card.Subtitle>
                <span> </span>
                <Card.Text className="w-[25rem]">
                  <p>
                    {language === TURKCE
                      ? profileEng.dateDetail
                      : profileTr.dateDetail}
                  </p>
                  <p>
                    {language === TURKCE
                      ? profileEng.cityDetail
                      : profileTr.cityDetail}
                  </p>
                  <p>
                    {language === TURKCE
                      ? profileEng.uniDetail1
                      : profileTr.uniDetail1}
                  </p>
                  <p>
                    {language === TURKCE
                      ? profileEng.preferDetail
                      : profileTr.preferDetail}
                  </p>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="flex flex-col w-[32rem] h-[18rem]">
          <h3> {language === TURKCE ? profileEng.about : profileTr.about}</h3>
          <p>
            {language === TURKCE ? profileEng.aboutText1 : profileTr.aboutText1}
          </p>
          <p>
            {" "}
            {language === TURKCE ? profileEng.aboutText2 : profileTr.aboutText2}
          </p>
        </div>{" "}
      </div>
    </article>
  );
};

export default Profile;
