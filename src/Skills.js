import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import {useState} from 'react'

const Skills = () => {

const LinkstoProj = styled.a `
`
const [spacediv, setSpacediv] = useState(false)
const [matchdiv, setMatchdiv] = useState(false)

function handleHover(e) {    
    setSpacediv(true)
}

function handleHoverOut(e) {    
    setSpacediv(false)
}

function handleHoverM(e) {    
    setMatchdiv(true)
}

function handleHoverOutM(e) {    
    setMatchdiv(false)
}

const SkillDiv = styled.div `
text-align: center;
font-size: 3em;
white-space: pre-line;
`

const TitleDiv = styled.div `
text-align: center;
font-size: 2.5em;
white-space: pre-line;
`

    return (
        <Grid container maxWidth="md" spacing={1}>
            <Grid xs={12} md={12} lg={12}>
            <TitleDiv><h1>{'Projects \n'}</h1></TitleDiv>
            </Grid>
            <Grid xs={12} md={6} lg={6}>
            <SkillDiv onMouseEnter={handleHover} onMouseLeave={handleHoverOut}><LinkstoProj href="https://stuck-in-space.netlify.app/" target="_blank" rel="noopener noreferrer" alt="stuckinspace" >{spacediv ? 'A CLI-style game, built with React and Ruby' : 'Stuck In Space \n\n 🚀 👽 👾' }</LinkstoProj></SkillDiv>
            </Grid>
            <Grid xs={12} md={6} lg={6}>
            <SkillDiv onMouseEnter={handleHoverM} onMouseLeave={handleHoverOutM}><LinkstoProj href="https://theperfectmatch.netlify.app/" target="_blank" rel="noopener noreferrer">{matchdiv ? 'A fun tool to match activites, built with React' : 'Match It \n\n 🎥 🍔 🎮'}</LinkstoProj></SkillDiv>
            </Grid>
        </Grid>
    )
}

export default Skills
