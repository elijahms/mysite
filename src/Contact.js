import React, {useState} from 'react'
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

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

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

    const StyledIlink = styled(Link)`
        &:hover {
            color: #E1306C
        }
    `
    const StyledLlink = styled(Link)`
    &:hover {
        color: #0077B5
    }
    `

    const StyledGlink = styled(Link)`
    &:hover {
        color: #000000
    }
    `

    const StyledTlink = styled(Link)`
    &:hover {
        color: #1DA1F2
    }
    `

    const StyledElink = styled(Link)`
    &:hover {
        color: #657786
    }
    `

    return (
        <>
        {screenWidth > 900 ? <Particle /> : null}
        <Grid container maxWidth="md" spacing={1} sx={{ zIndex: "1000"}}>
            <Grid xs={12} md={2.4} lg={2.4}>
            <StyledIconDiv className = 'bounce rectangle'>
                <StyledIlink className = 'instagram' href="https://www.instagram.com/elijahsilverman/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ fontSize: 70 }} />
                </StyledIlink>
            </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={2.4} lg={2.4}>
            <StyledIconDiv className = 'bounce rectangle' >
                <StyledLlink href="https://www.linkedin.com/in/elijah-silverman-917a91a5/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ fontSize: 70 }}/>
            </StyledLlink>
            </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={2.4} lg={2.4}>
            <StyledIconDiv className = 'bounce rectangle' >
            <StyledGlink href="https://github.com/elijahms" target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ fontSize: 70 }}/>
            </StyledGlink>
                </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={2.4} lg={2.4}>
            <StyledIconDiv className = 'bounce rectangle' >
            <StyledTlink href="https://twitter.com/elijahsilverman"  target="_blank" rel="noopener noreferrer">
                <TwitterIcon sx={{ fontSize: 70} }/>
            </StyledTlink>
                </StyledIconDiv>
            </Grid>
            <Grid xs={12} md={2.4} lg={2.4}>
            <StyledIconDiv className = 'bounce rectangle' >
                <StyledElink href='mailto:elijahmsilverman@gmail.com' target="_blank" rel="noopener noreferrer">
                    <EmailOutlinedIcon sx={{ fontSize: 77 }}/>
                </StyledElink>
                </StyledIconDiv>
            </Grid>
        </Grid>
        </>
    )
}

export default Contact
