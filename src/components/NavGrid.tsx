'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

interface NavGridProps {
  scrollFunc: (section: string) => void;
}

const NavGrid = ({ scrollFunc }: NavGridProps) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: 'center',
        textAlign: 'center',
        '@media only screen and (max-width: 500px)': {
          mt: 0,
        },
      }}
    >
      {['About Me', 'Projects', 'Connect'].map((g, i) => {
        const sections = ['about-me', 'projects', 'contact'];
        return (
          <Grid key={i}>
            <Button
              variant="text"
              size="large"
              sx={{ color: '#053868' }}
              onClick={() => scrollFunc(sections[i])}
            >
              {g}
            </Button>
          </Grid>
        );
      })}
      <Grid>
        <Button
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          size="large"
          sx={{ color: '#053868' }}
        >
          Resume
        </Button>
      </Grid>
    </Grid>
  );
};

export default NavGrid; 