import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Container from "@mui/material/Container";
import DownArrow from "./DownArrow";
import NavGrid from "./NavGrid";
import HeroText from "./HeroText";

const AllPages = () => {
  const ref = useRef();

  function scrollFunc(scroll) {
    if (ref.current) {
      ref.current.scrollTo(scroll);
    }
  }

  return (
    <Parallax pages={4} ref={ref} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} className="p-content-layer">
        <Container>
          <HeroText />
          <NavGrid scrollFunc={scrollFunc} />
          <DownArrow scrollFunc={scrollFunc} />
        </Container>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.7} className="parallax-layer" />
      <ParallaxLayer id="about-me" offset={1} className="p-content-layer">
        <AboutMe scrollFunc={scrollFunc} />
      </ParallaxLayer>
      <ParallaxLayer offset={2} />
      <ParallaxLayer
        id="projects"
        offset={2}
        speed={0.4}
        className="p-content-layer"
      >
        <Projects scrollFunc={scrollFunc} />
      </ParallaxLayer>
      <ParallaxLayer offset={3} className="parallax-layer" />
      <ParallaxLayer
        id="contact"
        offset={3}
        speed={0.4}
        className="p-content-layer"
      >
        <Contact scrollFunc={scrollFunc} />
      </ParallaxLayer>
    </Parallax>
  );
};

export default AllPages;
