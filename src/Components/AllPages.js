import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import Grid from "@mui/material/Grid";
import { useSpring, animated, config } from "@react-spring/web";
import Typewriter from "typewriter-effect";
import resume from "../Static/resume.pdf";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

const AllPages = () => {
  const parrStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };

  const ref = useRef();

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

  function scrollFunc(scroll) {
    if (ref.current) {
      ref.current.scrollTo(scroll);
    }
  }

  return (
    <Parallax pages={4} ref={ref} style={{ top: "0", left: "0" }}>
      <ParallaxLayer factor={1} offset={0} speed={2.5} style={parrStyle}>
        <Container>
          <animated.div style={MyName}>
            <Typography
              variant="h1"
              sx={{
                // fontSize: "4rem",
                textAlign: "center",
                color: "text.secondary",
              }}
            >
              Elijah <span style={{ color: "#edf5e1" }}>Silverman</span>
            </Typography>
          </animated.div>
          <Box
            sx={{
              mt: 5,
              mb: 5,
              fontSize: "1.6rem",
              minHeight: "15vh",
              textAlign: "center",
            }}
          >
            <Typewriter
              options={{
                strings:
                  "Unsatisfied with what I currently know - proud of what I've accomplished.",
                autoStart: true,
                delay: 90,
                cursor: "",
              }}
            />
          </Box>
          <Grid
            container
            justify="center"
            sx={{
              mt: 5,
              textAlign: "center",
            }}
            spacing={2}
          >
            <Grid item xs={12} md={3} lg={3}>
              <Button variant="text" size="large" onClick={() => scrollFunc(1)}>
                About Me
              </Button>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Button variant="text" size="large" onClick={() => scrollFunc(2)}>
                Projects
              </Button>
            </Grid>
            <Grid variant="text" size="large" item xs={12} md={3} lg={3}>
              <Button variant="text" size="large" onClick={() => scrollFunc(3)}>
                Contact
              </Button>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Button
                sx={{ color: "#edf5e1" }}
                variant="text"
                size="large"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Button>
            </Grid>
            <Grid item style={LinkSpring} xs={12} md={12} lg={12}>
              <div className="down-arrow"></div>
            </Grid>
          </Grid>
        </Container>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={1.5}
        factor={1.5}
        style={{ backgroundColor: "#053868" }}
      />

      <ParallaxLayer id="about-me" offset={1} speed={0.4} style={parrStyle}>
        <AboutMe />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={2}
        factor={1.5}
        style={{ backgroundColor: "#053868" }}
      />

      <ParallaxLayer offset={2} speed={0.4} style={parrStyle}>
        <Skills />
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={2}
        factor={1.5}
        style={{ backgroundColor: "#053868" }}
      />
      <ParallaxLayer offset={3} speed={0.4} style={parrStyle}>
        <Contact />
      </ParallaxLayer>
    </Parallax>
  );
};

export default AllPages;
