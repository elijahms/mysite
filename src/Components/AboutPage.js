import React from "react";
import AboutMe from "./AboutMe";
import styled from "styled-components";
import NavBar from "./NavBar";

const AboutPage = () => {
  const AboutDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10vh;
  `;
  return (
    <div>
      <NavBar />
      <AboutDiv>
        <AboutMe />
      </AboutDiv>
    </div>
  );
};

export default AboutPage;
