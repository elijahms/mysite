import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Particle from "./Particle";
import Stack from "@mui/material/Stack";
import ScrollToTop from "./ScrollToTop";
import { socialObj } from "./Constants";

const Contact = ({ scrollFunc }) => {
  const SocialLinks = () => {
    return socialObj.map((s) => {
      return (
        <Box key={s.name} className="contact-icons">
          <Link href={s.link} target="_blank" rel="noopener noreferrer">
            <s.icon
              sx={{
                fontSize: s.fontSize,
                color: "#FFFFFF",
                "&:hover": {
                  color: s.color,
                },
              }}
            />
          </Link>
        </Box>
      );
    });
  };

  return (
    <>
      {window.innerWidth > 500 && <Particle />}
      <Stack
        direction={window.innerWidth < 500 ? "column" : "row"}
        alignItems="center"
        spacing={{ xs: 2, md: 3, lg: 20 }}
        sx={{
          zIndex: "1000",
        }}
      >
        <SocialLinks />
      </Stack>
      <ScrollToTop scrollFunc={scrollFunc} />
    </>
  );
};

export default Contact;
