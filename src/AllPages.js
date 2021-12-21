import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Main from './Main';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

const AllPages = () => {

    return (
        <Parallax
            pages={5}
            style={{ top: '0', left: '0'}}
            >
            <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
            <Main />
        </ParallaxLayer>
        <ParallaxLayer 
            offset={1}
            speed={1.5}
            factor={1.5}
            style={{ backgroundColor: '#0a192f' }} 
        />
        <ParallaxLayer
            offset={1}
            speed={0.4}
            style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
            <AboutMe />
        </ParallaxLayer>

        <ParallaxLayer 
            offset={2}
            speed={2}
            factor={1.5}
            style={{ backgroundColor: '#0a192f' }} 
        />
        <ParallaxLayer
            offset={2}
            speed={0.4}
            style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
            <Skills />
        </ParallaxLayer>
        <ParallaxLayer 
            offset={3}
            speed={2}
            factor={1.5}
            style={{ backgroundColor: '#0a192f' }} 
        />
        <ParallaxLayer
            offset={3}
            speed={0.4}
            style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
            <Experience />
        </ParallaxLayer>
        <ParallaxLayer 
            offset={4}
            speed={2}
            style={{ backgroundColor: '#0a192f' }} 
        />
        <ParallaxLayer
            offset={4}
            speed={0.4}
            style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
            <Contact />
        </ParallaxLayer>
        </Parallax>
        
    )
}

export default AllPages
