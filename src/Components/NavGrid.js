import Grid from "@mui/material/Grid";
import resume from "../Assets/resume.pdf";
import Button from "@mui/material/Button";

const NavGrid = ({ scrollFunc }) => {
  return (
    <Grid
      container
      justify="center"
      sx={{
        textAlign: "center",
        "@media only screen and (max-width: 500px)": {
          mt: 0,
        },
      }}
      spacing={2}
    >
      {["About Me", "Projects", "Connect"].map((g, i) => {
        return (
          <Grid key={i} item xs={12} md={3} lg={3}>
            <Button
              variant="text"
              size="large"
              sx={{ color: "#053868" }}
              onClick={() => scrollFunc(i + 1)}
            >
              {g}
            </Button>
          </Grid>
        );
      })}
      <Grid item xs={12} md={3} lg={3}>
        <Button
          variant="text"
          size="large"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>
      </Grid>
    </Grid>
  );
};

export default NavGrid;
