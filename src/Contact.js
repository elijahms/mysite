import React from 'react'
import { Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from 'styled-components';
import Link from '@mui/material/Link';

const Contact = () => {

    const StyledIconDiv = styled.div `
    text-align: center;
    font-size: 2em;
    padding-left: 3%;
    padding-right: 3%;
    white-space: pre-line;
        a {
            // border: 1px dotted white;
            color: white
        }
    `


    return (
        <Grid container maxWidth="md" spacing={1}>
            <Grid xs={12} md={3} lg={3}>
            <StyledIconDiv>
                <Link href="https://www.instagram.com/elijahsilverman/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ fontSize: 70 }} />
                </Link>
            </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={3} lg={3}>
            <StyledIconDiv>
                <Link href="https://www.linkedin.com/in/elijah-silverman-917a91a5/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ fontSize: 70 }}/>
            </Link>
            </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={3} lg={3}>
            <StyledIconDiv>
            <Link href="https://github.com/elijahms" target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ fontSize: 70 }}/>
            </Link>
                </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={3} lg={3}>
            <StyledIconDiv>
            <Link href="https://twitter.com/elijahsilverman" target="_blank" rel="noopener noreferrer">
                <TwitterIcon sx={{ fontSize: 70 }}/>
            </Link>
                </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={12} lg={12}>
            <StyledIconDiv><Link href='mailto:elijahmsilverman@gmail.com'>{' \n\n elijahmsilverman@gmail.com'}</Link></StyledIconDiv>
            </Grid>
        </Grid>
    )
}

export default Contact
