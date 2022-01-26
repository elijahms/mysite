import Grid from "@mui/material/Grid";
import { useSpring, animated, config } from "@react-spring/web";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import resume from "../Static/resume.pdf";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Main = () => {
  const MyName = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
    config: config.molasses,
  });

  const LinkSpring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
    config: config.molasses,
  });

//   const Item = styled.div`
//     max-width: 80%;
//     margin-left: 10%;
//     font-family: Calibre;
//     font-size: 20pt;
//     text-align: center;
//     padding-bottom: 10%;
//     color: #379683;
//     a {
//       color: #edf5e1;
//     }
//   `;

  return (
    <Container maxWidth="lg">
      <animated.div style={MyName}>
        <Typography
          sx={{
            fontFamily: "Calibre",
            fontSize: "4rem",
            textAlign: " center",
            color: "#053868",
          }}
        >
          Elijah <span style={{ color: "#edf5e1" }}>Silverman</span>
        </Typography>
      </animated.div>
      <Typewriter
        options={{
          // strings: ['React', 'Javascript', 'Ruby', 'CSS', 'HTML', 'Rails', "Unsatisfied with what I currently know - proud of what I've accomplished."],
          strings:
            "Unsatisfied with what I currently know - proud of what I've accomplished.",
          autoStart: true,
          delay: 90,
          cursor: "",
        }}
      />
      <Grid
        container
        maxWidth="md"
        sx={{
          mt: 5,
          fontFamily: "Calibre",
          color: "#379683",
          border: "2px solid red",
          alignItems: "center",
        }}
        spacing={2}
      >
        <Grid item xs={12} md={3} lg={3}>
          <Box>
            <NavLink exact to="/about">
              About Me
            </NavLink>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <NavLink exact to="/skills">
            Projects
          </NavLink>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <NavLink exact to="/contact">
            Contact
          </NavLink>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <a
            style={LinkSpring}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </Grid>
        <Grid item style={LinkSpring} xs={12} md={12} lg={12}>
          <div className="down-arrow"></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
