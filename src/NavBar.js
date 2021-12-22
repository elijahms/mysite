import React from 'react'
import { Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {

    const Item = styled.div `
    font-family: Calibre;
    font-size: 20pt;
    text-align: center;
    padding-top: 5%;
    `;

    const BarDiv = styled.div `
    `;

    return (
        <BarDiv>
            <Grid container>
            <Grid xs={4} md={4} s={4}>
            <Item><NavLink exact to="/about">About Me</NavLink></Item>
            </Grid>
            <Grid xs={4} md={4} s={4}>
            <Item><NavLink activeStyle exact to="/skills">Skills</NavLink></Item>
            </Grid>
            <Grid xs={4} md={4} s={4}>
            <Item><NavLink activeStyle exact to="/contact">Contact</NavLink></Item>
            </Grid>
            <Grid xs={12} md={12} s={12}>
            <Item><NavLink activeStyle exact to="/">Home</NavLink></Item>
            </Grid>
            </Grid>
        </BarDiv>
    )
}

export default NavBar
