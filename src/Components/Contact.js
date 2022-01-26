import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "@mui/material/Link";
import Particle from "./Particle";

const Contact = () => {
  let screenSize = window.innerWidth;

  return (
    <>
      {screenSize > 900 && <Particle />}
      <Grid
        container
        maxWidth="md"
        spacing={{ xs: 2, md: 3, lg: 5 }}
        sx={{ zIndex: "1000", pb: 3 }}
      >
        <Grid item xs={12} md={2.4} lg={2.4}>
          <Box className="contact-icons">
            <Link
              href="https://www.instagram.com/elijahsilverman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                sx={{
                  fontSize: 70,
                  color: "#FFFFFF",
                  "&:hover": {
                    color: "#e1306c",
                  },
                }}
              />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={2.4} lg={2.4}>
          <Box className="contact-icons">
            <Link
              href="https://www.linkedin.com/in/elijah-silverman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  fontSize: 70,
                  color: "#FFFFFF",
                  "&:hover": {
                    color: " #0077b5",
                  },
                }}
              />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={2.4} lg={2.4}>
          <Box className="contact-icons">
            <Link
              href="https://github.com/elijahms"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon
                sx={{
                  fontSize: 70,
                  color: "#FFFFFF",
                  "&:hover": {
                    color: "#000000",
                  },
                }}
              />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={2.4} lg={2.4}>
          <Box className="contact-icons">
            <Link
              href="https://twitter.com/elijahsilverman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon
                sx={{
                  fontSize: 70,
                  color: "#FFFFFF",
                  "&:hover": {
                    color: " #1da1f2",
                  },
                }}
              />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={2.4} lg={2.4}>
          <Box className="contact-icons">
            <Link
              href="mailto:elijahmsilverman@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailOutlinedIcon
                sx={{
                  fontSize: 77,
                  color: "#FFFFFF",
                  "&:hover": {
                    color: "#657786",
                  },
                }}
              />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
