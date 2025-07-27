'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

const NavGrid = () => {
  return (
    <Button
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      variant="text"
      size="large"
      sx={{ color: '#053868', display: 'block', mx: 'auto', mt: 2 }}
    >
      Resume
    </Button>
  );
};

export default NavGrid; 