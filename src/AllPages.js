import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Main from './Main';
import AboutMe from './AboutMe';
import Skills from './Skills';
// import Experience from './Experience';
import Contact from './Contact';
import Particle from './Particle';

const AllPages = () => {

    const parrStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
    }

    const parrBackground = {
        backgroundColor: '#053868'
    }

    return (

        <Parallax
            pages={4}
            style={{ top: '0', left: '0'}}>
                
            <ParallaxLayer

            offset={0}
            speed={2.5}
            style={parrStyle}>
            <Main />

            </ParallaxLayer>

            <ParallaxLayer 
                offset={1}
                speed={1.5}
                factor={1.5}
                style={parrBackground} 
            />

            <ParallaxLayer

                offset={1}
                speed={0.4}
                style={parrStyle}>
                <AboutMe />

            </ParallaxLayer>

            <ParallaxLayer 
                offset={2}
                speed={2}
                factor={1.5}
                style={parrBackground} 
            />

            <ParallaxLayer
            
                offset={2}
                speed={0.4}
                style={parrStyle}>
                <Skills />

            </ParallaxLayer>

            <ParallaxLayer 
                offset={3}
                speed={2}
                factor={1.5}
                style={parrBackground} 
            />
            <ParallaxLayer
                offset={3}
                speed={0.4}
                style={parrStyle}>
                <Contact />
            </ParallaxLayer>

        </Parallax> 
    )
}

export default AllPages
