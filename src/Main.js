import React from 'react'
import Grid from '@mui/material/Grid';
import { useSpring, animated, config } from '@react-spring/web'
import {useState} from 'react'
import styled from 'styled-components';

const Main = () => {

    const MyName = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 500,
        config: config.molasses,
      })

      const LinkSpring = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 1000,
        config: config.molasses,
      })

    const Item = styled.div `
    // border: 1px dotted white;
    font-family: Calibre;
    font-size: 20pt;
    text-align: center;
    `;
    
    const MyNameStyle = styled.h1 `
    font-family: Calibre;
    font-size: 5em;
    text-align: center;
    `
    return (
        <Grid container maxWidth="md" spacing={2}>
            <Grid xs={12}>
            <animated.div style={MyName}><MyNameStyle>Elijah</MyNameStyle></animated.div>
            </Grid>
            <Grid xs={12} md={4} s={4}>
                <Item><animated.a style={LinkSpring} href="#skills">Skills</animated.a></Item>
            </Grid>
            <Grid xs={12} md={4} s={4}>
            <Item><animated.a style={LinkSpring} href="#about-me">About Me</animated.a></Item>
            </Grid>
            <Grid xs={12} md={4} s={4}>
            <Item><animated.a style={LinkSpring} href="#contact">Contact</animated.a></Item>
            </Grid>
            <Grid style={LinkSpring} xs={12} md={12} s={12}>
            <div className="down-arrow"></div>
            </Grid>
        </Grid>
    )
}

export default Main
