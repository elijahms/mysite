import React from 'react'
import Container from '@mui/material/Container';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const AboutMe = () => {

    const AboutMeP = styled.p `
    font-size: 1.5em;
    @media screen and (max-width: 600px) {
          font-size: 20px;
        }
    `
    const SkillsT = styled.h2 `
    font-size: 1.5em;
    text-align: center;
    white-space: pre-line;
    `

    const SkillsD = styled.div `
    font-size: 1.5em;
    text-align: center;
    white-space: pre-line;
    `

    //\n Never satisfied with what I currently know - proud of what I've accomplished.
    return (
        <Container maxWidth="md" >
            <h1>About Me:</h1>
            <AboutMeP> 
                Hey, my name is Elijah! My path to web development started in 2020 during the pandemic while I was studying for a BA in Business Admin. I had a few fun projects that I wanted to take a stab at, but I found myself confined with wix and other sites that had a low barrier to entry. After wokring at a consulting firm for almost a year, I decided I wanted to dive head-first into web develpment and I started at Flatiron, a software enginerring bootcamp. I am really excited to get my feet wet and begin my Software engineering career.
            </AboutMeP>
            <SkillsT>{'Some skills I\'ve aquired so far include \n\n'}</SkillsT>
            <Grid container spacing={1}>
            <Grid xs={6} md={6} lg={2}>
            <SkillsD>React</SkillsD>
            </Grid>
            <Grid xs={6} md={6} lg={2}>
            <SkillsD>HTML</SkillsD>
            </Grid>
            <Grid xs={6} md={6} lg={2}>
            <SkillsD>Javascript</SkillsD>
            </Grid>
            <Grid xs={6} md={6} lg={2}>
            <SkillsD>Ruby</SkillsD>
            </Grid>
            <Grid xs={6} md={6} lg={2}>
            <SkillsD>Rails</SkillsD>
            </Grid>
            <Grid xs={6} md={6} lg={2}>
            <SkillsD>CSS</SkillsD>
            </Grid>
            </Grid>
        </Container>
    )
}

export default AboutMe
