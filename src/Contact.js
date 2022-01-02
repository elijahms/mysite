import React from 'react'
import { Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from 'styled-components';
import Link from '@mui/material/Link';
import Particle from './Particle';

const Contact = () => {

    const StyledIconDiv = styled.div `
    text-align: center;
    font-size: 2em;
    padding-left: 3%;
    padding-right: 3%;
    white-space: pre-line;
        a {
            color: #EDF5E1
        }
    `

    const Styledlink = styled(Link)`
        &:hover {
            color: #E1306C
        }
    `

    return (
        <>
        <Particle />
        <Grid container maxWidth="md" spacing={1} sx={{ zIndex: "1000"}}>
            <Grid xs={12} md={2.4} lg={2.4}>
            <StyledIconDiv className = 'bounce rectangle' id = 'instagram'>
                <Styledlink href="https://www.instagram.com/elijahsilverman/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ fontSize: 70 }} />
                </Styledlink>
            </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={2.4} lg={2.4}>
            <StyledIconDiv className = 'bounce rectangle' >
                <Link href="https://www.linkedin.com/in/elijah-silverman-917a91a5/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ fontSize: 70 }}/>
            </Link>
            </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={2.4} lg={2.4}>
            <StyledIconDiv className = 'bounce rectangle' >
            <Link href="https://github.com/elijahms" target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ fontSize: 70 }}/>
            </Link>
                </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={2.4} lg={2.4}>
            <StyledIconDiv className = 'bounce rectangle' >
            <Link href="https://twitter.com/elijahsilverman"  target="_blank" rel="noopener noreferrer">
                <TwitterIcon sx={{ fontSize: 70} }/>
            </Link>
                </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={2.4} lg={2.4}>
            <StyledIconDiv className = 'bounce rectangle' ><Link href='mailto:elijahmsilverman@gmail.com' target="_blank" rel="noopener noreferrer"><EmailOutlinedIcon sx={{ fontSize: 77 }}/></Link></StyledIconDiv>
            </Grid>
        </Grid>
        </>
    )
}

export default Contact
