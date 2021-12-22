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
    `
    return (
        <div>
            <NavBar />
        <AboutDiv>
        <Contact />
        </AboutDiv>
        </div>
    )
}

export default ContactPage
