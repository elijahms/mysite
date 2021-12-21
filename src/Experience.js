import React from 'react'
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

const Experience = () => {

    const ContentP = styled.p `
    font-size: 1em;
    white-space: pre-line;
    padding-left: 3%;
    padding-right: 3%;
    `

    const TitleDiv = styled.div `
    text-align: center;
    font-size: 2.5em;
    white-space: pre-line;
    padding-left: 3%;
    padding-right: 3%;
    `

    return (
        <Grid container maxWidth="md" spacing={1}>
                      <Grid xs={12} md={12} lg={12}>
            <TitleDiv><h2>Where I've worked</h2></TitleDiv>
            </Grid>
            <Grid xs={12} md={6} lg={6}>   
            <ContentP>{
                    'YYA \n\n Built engaging, informative, and dynamic client-facing deliverables in both PowerPoint and Word. \n\n Worked extensively with Smart-City and Future Mobility clients, building out strategic solutions to solve some of the industry\'s critical challenges. \n\n Interpreted research trends through examination of complex publications to inform an investment strategy for The Air Force Research Laboratory. \n\n Developed detailed client proposals for customers in Mobility, Smart City Management, UAV, IT, Real Estate systems in three different continents.\n\n Collaborated with a Big-4 global consulting firm on multiple Future Mobility and Drone projects, facilitating their business development through answering RFPs.'}
            </ContentP>
            </Grid>
            <Grid xs={12} md={6} lg={6}>
            <ContentP> {'Dindex \n\nLeveraged market research to contact relevant venture capital firms to secure new capital sources. \n\n Utilized MS Suite to co-create pitch decks for the startup. \n\n Built and maintained strong interpersonal relationships with clients.'} </ContentP>
            </Grid>
            </Grid>
    )
}

export default Experience
