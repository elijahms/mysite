import React from "react";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";

const ScrollToTop = ({ scrollFunc }) => {
  return (
    <ArrowCircleUpRoundedIcon
      sx={{
        position: "absolute",
        fontSize: '50px',
        bottom: 10,
        right: 10,
      }}
      onClick={() => scrollFunc(0)}
    ></ArrowCircleUpRoundedIcon>
  );
};

export default ScrollToTop;
