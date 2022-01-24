import Grid from "@mui/material/Grid";
import { useSpring, animated, config } from "@react-spring/web";
import { useState } from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import resume from "./Static/resume.pdf";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

const Main = () => {
  const MyName = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
    config: config.molasses,
  });

  const LinkSpring = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
    config: config.molasses,
  });

  const Item = styled.div`
    font-family: Calibre;
    font-size: 20pt;
    text-align: center;
    padding-bottom: 10%;
    color: #379683;
    a {
      color: #edf5e1;
    }
  `;

  const MyNameStyle = styled.h1`
    font-family: Calibre;
    font-size: 400%;
    text-align: center;
    color: #053868;
  `;
  const LastNameStyle = styled.span`
    color: #edf5e1;
  `;

  return (
    <Grid container maxWidth="md" spacing={2}>
      <Grid xs={12}>
        <animated.div style={MyName}>
          <MyNameStyle>
            Elijah <LastNameStyle>Silverman</LastNameStyle>
          </MyNameStyle>
        </animated.div>
      </Grid>
      <Grid xs={12}>
        <Item>
          <Typewriter
            options={{
              // strings: ['React', 'Javascript', 'Ruby', 'CSS', 'HTML', 'Rails', "Unsatisfied with what I currently know - proud of what I've accomplished."],
              strings:
                "Unsatisfied with what I currently know - proud of what I've accomplished.",
              autoStart: true,
              delay: 90,
              cursor: "",
            }}
          />
        </Item>
      </Grid>
      <Grid xs={12} md={3} s={3}>
        <Item>
          <NavLink activeStyle exact to="/about">
            About Me
          </NavLink>
        </Item>
      </Grid>
      <Grid xs={12} md={3} s={3}>
        <Item>
          <NavLink activeStyle exact to="/skills">
            Projects
          </NavLink>
        </Item>
      </Grid>
      <Grid xs={12} md={3} s={3}>
        <Item>
          <NavLink activeStyle exact to="/contact">
            Contact
          </NavLink>
        </Item>
      </Grid>
      <Grid xs={12} md={3} s={3}>
        <Item>
          <a
            style={LinkSpring}
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </Item>
      </Grid>
      <Grid style={LinkSpring} xs={12} md={12} s={12}>
        <div className="down-arrow"></div>
      </Grid>
    </Grid>
  );
};

export default Main;
