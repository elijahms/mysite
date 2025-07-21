'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeroText from '@/components/HeroText';
import NavGrid from '@/components/NavGrid';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#0dec7c',
      },
      secondary: {
        main: '#e040fb',
      },
      background: {
        default: '#06a86d',
      },
      text: {
        primary: '#edf5e1',
      },
    },
    typography: {
      fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
  });

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ minHeight: '100vh' }}>
        {/* Hero Section */}
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '20px'
        }}>
          <HeroText />
          <NavGrid scrollFunc={scrollToSection} />
        </div>

        {/* About Section */}
        <div id="about-me" style={{ minHeight: '100vh', padding: '20px' }}>
          <AboutMe scrollFunc={scrollToSection} />
        </div>

        {/* Projects Section */}
        <div id="projects" style={{ minHeight: '100vh', padding: '20px' }}>
          <Projects />
        </div>

        {/* Contact Section */}
        <div id="contact" style={{ minHeight: '100vh', padding: '20px' }}>
          <Contact scrollFunc={scrollToSection} />
        </div>
      </div>
    </ThemeProvider>
  );
}
