import Grid from "@mui/material/Grid";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { projectsObj } from "../Assets/projects_info";

const Projects = () => {
  const [projectDiv, setProjectDiv] = useState(null);

  return (
    <Container sx={{ color: "text.primary" }}>
      <Typography
        align="center"
        sx={{
          pb: 15,
          fontSize: "4rem",
          "@media only screen and (max-width: 500px)": {
            fontSize: "3rem",
            pb: 3,
          },
        }}
      >
        Projects
      </Typography>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          justifyContent: "center",
          alignItems: "strech",
          textAlign: "center",
          whiteSpace: "pre-line",
          a: {
            fontSize: "1.7rem",
            "@media only screen and (max-width: 500px)": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        {projectsObj.map((p) => {
          return (
            <Grid
              key={p.name}
              sx={{
                minHeight: "45vh",
                "@media only screen and (max-width: 500px)": {
                  minHeight: "0vh",
                },
              }}
              onMouseEnter={(e) => setProjectDiv(e.target.id)}
              onMouseLeave={() => setProjectDiv(null)}
              id={p.name}
              item
              xs={12}
              md={2}
              lg={2}
            >
              <Typography
                component="a"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                alt={p.name}
              >
                {projectDiv === p.name ? p.blurb : p.tagline}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Projects;
