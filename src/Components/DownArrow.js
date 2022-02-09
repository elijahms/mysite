import React from "react";
import Box from "@mui/material/Box";
import { useSpring, animated, config } from "@react-spring/web";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const DownArrow = ({ scrollFunc }) => {
  const { y, color } = useSpring({
    to: { y: 0, color: "#edf5e1" },
    from: { y: 20, color: "#053868" },
    loop: { reverse: true },
    config: {
      duration: 1000,
    },
  });
  return (
    <Box sx={{ display: "flex" }}>
      <animated.div style={{ y, margin: "auto", color }} onClick={() => scrollFunc(1)}>
        <KeyboardArrowDownRoundedIcon
          sx={{ fontSize: "70pt" }}
        ></KeyboardArrowDownRoundedIcon>
      </animated.div>
    </Box>
  );
};

export default DownArrow;
