import React from 'react'
import Contact from './Contact'
import NavBar from './NavBar'
import styled from 'styled-components'

const ContactPage = () => {
   
    const AboutDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20vh;
    margin-left: 15%;
    margin-right: 15%
    `
    const PageDiv = styled.div `
    background-color: #0a192f;
    height: 100vh;
    `

    return (
        <PageDiv>
            <NavBar />
        <AboutDiv>
        <Contact />
        </AboutDiv>
        </PageDiv>
    )
}

export default ContactPage
