import React from "react";
import Box from "@mui/material/Box";
import { useSpring, animated, config } from "@react-spring/web";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const DownArrow = ({ scrollFunc }) => {
  const { y, color } = useSpring({
    to: { y: -20, color: "#edf5e1" },
    from: { y: 30, color: "#053868" },
    loop: { reverse: true },
    config: {
      duration: 1500,
    },
  });
  return (
    <animated.div
      style={{
        y,
        color,
        position: "absolute",
        bottom: 0,
        width: "100vw",
        left: 0,
        right: 0,
        display: 'flex'
      }}
      onClick={() => scrollFunc(1)}
    >
      <KeyboardArrowDownRoundedIcon
        sx={{ fontSize: "70pt", margin: 'auto'}}
      ></KeyboardArrowDownRoundedIcon>
    </animated.div>
  );
};

export default DownArrow;
