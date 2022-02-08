import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Waypoint } from "react-waypoint";
import { useState } from "react";
import ScrollToTop from "./ScrollToTop";

const AboutMe = ({scrollFunc}) => {
  const [skillsClass, setSkillsClass] = useState(
    "basic"
  );
  const skills = ["HTML", "Javascript", "CSS", "React", "Ruby", "Rails"];
  const aboutMeText =
    "Hey, my name is Elijah! My path to web development began in 2020 during the pandemic while completing my bachelor's degree in Business Administration. I had a few fun projects that I wanted to pursue, but found myself confined to Wix and similar services. As the phrase goes, 'If you want something done, you have to do it yourself.' I shifted my focus from business to web development and started at Flatiron, a software engineering bootcamp. I am looking forward to the challenges and excitement that a career in software engineering offers.";

    function enterSkillsDiv() {
      setSkillsClass("animate__animated animate__fadeInUp");
    }

  return (
    <Container maxWidth="md" sx={{ color: "text.primary" }}>
      <Typography
        variant="h2"
        sx={{
          mb: 5,
          color: "text.primary",
          "@media only screen and (max-width: 500px)": {
            mb: 2,
          },
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: "text.primary",
          "@media only screen and (max-width: 500px)": {
            fontSize: "1.2rem",
          },
        }}
      >
        {aboutMeText}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mt: 5,
          color: "text.primary",
          "@media only screen and (max-width: 500px)": {
            fontSize: "1.1rem",
            mt: 2,
          },
        }}
      >
        {"Some skills I've aquired along the way: \n\n"}
      </Typography>
      <Waypoint onEnter={enterSkillsDiv} onLeave={() => console.log("left")}>
        <Grid
          className={skillsClass}
          container
          // justify="center"
          // alignItems="left"
          // spacing={0}
          sx={{
            mt: 5,
            "@media only screen and (max-width: 500px)": {
              mt: 2,
              pr: 3,
              pl: 3,
            },
          }}
        >
          {skills.map((s, index) => (
            <Grid key={index} item xs={4} md={4} lg={2}>
              <Typography
                align="center"
                variant="h5"
                sx={{
                  "@media only screen and (max-width: 500px)": {
                    fontSize: '1rem'
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
