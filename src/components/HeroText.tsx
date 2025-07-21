'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const HeroText = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          color: '#053868',
          textAlign: 'center',
          '@media only screen and (max-width: 500px)': {
            fontSize: '3.5rem',
          },
        }}
      >
        Elijah <span style={{ color: '#edf5e1' }}>Silverman</span>
      </Typography>
      <Box
        sx={{
          mt: 5,
          fontSize: '1.6rem',
          minHeight: '17vh',
          textAlign: 'center',
          color: 'text.primary',
          maxWidth: '600px',
          mx: 'auto',
          '@media only screen and (max-width: 500px)': {
            fontSize: '1.4rem',
            mt: 3,
            maxWidth: '90%',
          },
        }}
      >
        <Typewriter
          options={{
            strings:
              'transforming business needs into innovative software solutions with a unique blend of technical expertise and business acumen',
            autoStart: true,
            delay: 50,
            cursor: '',
          }}
        />
      </Box>
    </>
  );
};

export default HeroText; 