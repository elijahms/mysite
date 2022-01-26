import React from "react";
import Skills from "./Skills";
import NavBar from "./NavBar";
import styled from "styled-components";

const ProjectsPage = () => {
  const AboutDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20vh;
    // background-color: ;
  `;

  return (
    <div>
      <NavBar />
      <AboutDiv>
        <Skills />
      </AboutDiv>
    </div>
  );
};

export default ProjectsPage;
