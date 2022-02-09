import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ScrollToTop from "./ScrollToTop";

const Projects = ({scrollFunc}) => {
  const [spacediv, setSpacediv] = useState(false);
  const [matchdiv, setMatchdiv] = useState(false);
  const [notediv, setNotediv] = useState(false);
  const [treadlitediv, setTreadlitediv] = useState(false);

  return (
    <Container sx={{ pb: 2 }}>
      <Typography
        align="center"
        sx={{
          fontSize: "5rem",
          color: "text.primary",
          pb: 15,
          "@media only screen and (max-width: 500px)": {
            fontSize: "4rem",
            pb: 3,
          },
        }}
      >
        Projects
      </Typography>
      <Grid
        container
        maxWidth="lg"
        spacing={4}
        sx={{
          minHeight: 250,
          alignItems: "center",
          textAlign: "center",
          whiteSpace: "pre-line",
          a: {
            fontSize: "2rem",
          },
        }}
      >
        <Grid item xs={12} md={6} lg={3}>
          <Box
            onMouseEnter={() => setSpacediv(true)}
            onMouseLeave={() => setSpacediv(false)}
          >
            <Typography
              component="a"
              href="https://www.loom.com/share/8db58058dc9a4bc09161d47fb4a2b199"
              target="_blank"
              rel="noopener noreferrer"
              alt="stuckinspace"
            >
              {spacediv
                ? "A CLI-style game, built with React and Ruby"
                : "stuck-in-space \n 🚀 👽 👾"}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            onMouseEnter={() => setMatchdiv(true)}
            onMouseLeave={() => setMatchdiv(false)}
          >
            <Typography
              component="a"
              href="https://theperfectmatch.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              alt="theperfectmatch"
            >
              {matchdiv
                ? "A fun tool to match activites, built with React"
                : "match-it \n 🎥 🍔 🎮"}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            onMouseEnter={() => setNotediv(true)}
            onMouseLeave={() => setNotediv(false)}
          >
            <Typography
              component="a"
              href="https://www.loom.com/share/769b5eeaf5464faea42578b015a38423?sharedAppSource=personal_library"
              target="_blank"
              rel="noopener noreferrer"
              alt="snapnote"
            >
              {notediv
                ? "Organizing notes - uber easy"
                : "snap-note \n 📅 📝 🗃️"}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box
            onMouseEnter={() => setTreadlitediv(true)}
            onMouseLeave={() => setTreadlitediv(false)}
          >
            <Typography
              component="a"
              href="https://www.loom.com/share/ae32fcb31548443dbf038873b9d6cf8d"
              target="_blank"
              rel="noopener noreferrer"
              alt="treadlite"
            >
              {treadlitediv
                ? "Calculate, track, compare your Carbon Footprint"
                : "treadlite \n 🌳 👣 🌲 "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <ScrollToTop scrollFunc={scrollFunc} />
    </Container>
  );
};

export default Projects;
