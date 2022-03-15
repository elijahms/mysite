import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Waypoint } from "react-waypoint";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";
import { skills, aboutMeText } from "../Assets/projects_info";

const AboutMe = ({ scrollFunc }) => {
  const [skillsClass, setSkillsClass] = useState("basic");

  function enterSkillsDiv() {
    setSkillsClass("animate__animated animate__fadeInUp");
  }

  return (
    <Container maxWidth="md" sx={{ color: "text.primary" }}>
      <Typography sx={{ mb: "3vh", fontSize: '3rem' }}>
        About Me
      </Typography>
      <Typography
        variant="h5"
        sx={{
          "@media only screen and (max-width: 500px)": {
            fontSize: "1.2rem",
          },
        }}
      >
        {aboutMeText}
      </Typography>
      <Waypoint onEnter={enterSkillsDiv}>
        <Grid
          className={skillsClass}
          container
          sx={{
            mt: 5,
            "@media only screen and (max-width: 500px)": {
              mt: 1,
              pr: 3,
              pl: 3,
            },
          }}
        >
          {skills.map((s, index) => (
            <Grid key={index} item xs={4} md={4} lg={3} sx={{ pt: 3 }}>
              <Typography
                align="center"
                variant="h5"
                sx={{
                  "@media only screen and (max-width: 500px)": {
                    fontSize: "1rem",
                  },
                }}
              >
                {s}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Waypoint>
      <ScrollToTop scrollFunc={scrollFunc} />
    </Container>
  );
};

export default AboutMe;
