import Container from '@mui/material/Container';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const AboutMe = () => {

    const AboutMeP = styled.p `
    font-size: 1.5em;
    color: #EDF5E1;
    @media screen and (max-width: 600px) {
          font-size: 20px;
        }
    `
    const SkillsT = styled.h2 `
    font-size: 1.5em;
    text-align: center;
    white-space: pre-line;
    color: #EDF5E1;
    `

    const SkillsD = styled.div `
    font-size: 1.5em;
    text-align: center;
    white-space: pre-line;
    color: #EDF5E1;
    `

    const skills = ['HTML', 'Javascript', 'CSS', 'React', 'Ruby', 'Rails']
    const aboutMeText = "Hey, my name is Elijah! My path to web development began in 2020 during the pandemic while completing my bachelor's degree in Business Administration. I had a few fun projects that I wanted to pursue, but found myself confined to Wix and similar services. As the phrase goes, 'If you want something done, you have to do it yourself.' I shifted my focus from business to web development and started at Flatiron, a software engineering bootcamp. I am looking forward to the challenges and excitement that a career in software engineering offers."
    
    // Unsatisfied with what I currently know - proud of what I've accomplished.

    return (
        <Container maxWidth="md" >
            <h1>About Me</h1>
            <AboutMeP> 
                {aboutMeText}
            </AboutMeP>
            <SkillsT>{'Some skills I\'ve aquired along the way: \n\n'}</SkillsT>
            <Grid container spacing={0.5}>
                {skills.map((s) => (<Grid xs={4} md={4} lg={2}><SkillsD><p>{s}</p></SkillsD></Grid>))}
            </Grid>
        </Container>
    )
}

export default AboutMe
