import React from "react";
import Typewriter from "typewriter-effect";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSpring, animated, config } from "@react-spring/web";

const HeroText = () => {
  const { opacity } = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
    config: config.molasses,
  });
  return (
    <>
      <animated.div style={{ opacity }}>
        <Typography
          variant="h1"
          sx={{
            color: "#053868",
            textAlign: "center",
            "@media only screen and (max-width: 500px)": {
              fontSize: "3.5rem",
            },
          }}
        >
          Elijah <span style={{ color: "#edf5e1" }}>Silverman</span>
        </Typography>
      </animated.div>
      <Box
        sx={{
          mt: 5,
          fontSize: "1.6rem",
          minHeight: "17vh",
          textAlign: "center",
          color: "text.primary",
          "@media only screen and (max-width: 500px)": {
            fontSize: "1.4rem",
            mt: 3,
          },
        }}
      >
        <Typewriter
          options={{
            strings:
              "transforming business needs into innovative software solutions with a unique blend of technical expertise and business acumen",
            autoStart: true,
            delay: 50,
            cursor: "",
          }}
        />
      </Box>
    </>
  );
};

export default HeroText;
