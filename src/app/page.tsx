'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeroText from '@/components/HeroText';
import NavGrid from '@/components/NavGrid';
import SocialLinks from '@/components/Contact';
import Box from '@mui/material/Box';

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          py: 4,
        }}
      >
        <HeroText />
        <NavGrid />
        <SocialLinks />
      </Box>
    </ThemeProvider>
  );
}
