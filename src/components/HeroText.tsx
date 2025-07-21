'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const HeroText = () => {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 2,
        textAlign: 'center',
        minHeight: '10vh',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: '#053868',
          fontWeight: 700,
          fontSize: { xs: '2.5rem', md: '4rem' },
          minHeight: '1.2em',
        }}
      >
        <Typewriter
          options={{
            strings: ['Elijah Silverman'],
            autoStart: true,
            delay: 50,
            cursor: '',
            loop: true,
            deleteSpeed: 30,
          }}
        />
      </Typography>
    </Box>
  );
};

export default HeroText; 