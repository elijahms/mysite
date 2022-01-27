import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Skills = () => {
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
          pb: 15,
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
              href="https://stuck-in-space.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              alt="stuckinspace"
            >
              {spacediv
                ? "A CLI-style game, built with React and Ruby"
                : "Stuck-in-Space \n 🚀 👽 👾"}
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
            >
              {matchdiv
                ? "A fun tool to match activites, built with React"
                : "Match It \n 🎥 🍔 🎮"}
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
              href="https://snap-note.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {notediv
                ? "Organizing notes - uber easy"
                : "Snap-note \n 📅 📝 🗃️"}
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
              href="https://treadlite.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {treadlitediv
                ? "Calculate, track, compare your Carbon Footprint"
                : "Treadlite \n 🌳 👣 🌲 "}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills;
