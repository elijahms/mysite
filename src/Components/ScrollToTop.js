import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import { useState } from "react";
import { Waypoint } from "react-waypoint";


const ScrollToTop = ({ scrollFunc }) => {
  const [scrollClass, setScrollClass] = useState("basic");
  function enterScrollArrow() {
    setScrollClass("animate__animated animate__fadeInRight animate__delay-3s");
  }
  function leaveScrollArrow() {
    setScrollClass("basic");
  }
  return (
    <Waypoint onEnter={enterScrollArrow} onLeave={leaveScrollArrow}>
      <div
        className={scrollClass}
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
      >
        <ArrowCircleUpRoundedIcon
          className="scroll-up-button"
          
          sx={{
            fontSize: "50px",
            color: "#06a86d",
            "&:hover": { color: "text.primary" },
          }}
          onClick={() => scrollFunc(0)}
        ></ArrowCircleUpRoundedIcon>
      </div>
    </Waypoint>
  );
};

export default ScrollToTop;
