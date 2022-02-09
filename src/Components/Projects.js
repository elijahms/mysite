import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ScrollToTop from "./ScrollToTop";
import projectsObj from "../Assets/projects_info";

const Projects = ({ scrollFunc }) => {
  const [projectDiv, setProjectDiv] = useState(null);

  return (
    <Container sx={{ pb: 2 }}>
      <Typography
        align="center"
        variant='h2'
        sx={{
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
        {projectsObj.map((p) => {
          return (
            <Grid key={p.name} item xs={12} md={6} lg={3}>
              <Box
                onMouseEnter={(e) => setProjectDiv(e.target.id)}
                onMouseLeave={() => setProjectDiv(null)}
                id={p.name}
              >
                <Typography
                  component="a"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="stuckinspace"
                >
                  {projectDiv === p.name ? p.blurb : p.tagline}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      {/* <ScrollToTop scrollFunc={scrollFunc} /> */}
    </Container>
  );
};

export default Projects;
