'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SvgIcon from '@mui/material/SvgIcon';

const SocialLinks = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      flexWrap: 'wrap',
      mt: 2,
    }}
  >
    <Link
      href="https://www.instagram.com/elijahsilverman"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: '#0dec7c',
        textDecoration: 'underline',
        textDecorationColor: 'rgba(13, 236, 124, 0.4)',
        '&:hover': {
          textDecorationColor: 'inherit',
        },
      }}
    >
      <InstagramIcon
        sx={{
          fontSize: '40px',
          color: '#FFFFFF',
          '&:hover': {
            color: '#e1306c',
          },
        }}
      />
    </Link>
    <Link
      href="https://www.linkedin.com/in/elijahsilverman/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: '#0dec7c',
        textDecoration: 'underline',
        textDecorationColor: 'rgba(13, 236, 124, 0.4)',
        '&:hover': {
          textDecorationColor: 'inherit',
        },
      }}
    >
      <LinkedInIcon
        sx={{
          fontSize: '40px',
          color: '#FFFFFF',
          '&:hover': {
            color: '#0077b5',
          },
        }}
      />
    </Link>
    <Link
      href="https://github.com/elijahms"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: '#0dec7c',
        textDecoration: 'underline',
        textDecorationColor: 'rgba(13, 236, 124, 0.4)',
        '&:hover': {
          textDecorationColor: 'inherit',
        },
      }}
    >
      <GitHubIcon
        sx={{
          fontSize: '40px',
          color: '#FFFFFF',
          '&:hover': {
            color: '#000000',
          },
        }}
      />
    </Link>
    <Link
      href="https://x.com/elijahsilverman"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: '#0dec7c',
        textDecoration: 'underline',
        textDecorationColor: 'rgba(13, 236, 124, 0.4)',
        '&:hover': {
          textDecorationColor: 'inherit',
        },
      }}
    >
      <SvgIcon
        sx={{
          fontSize: '40px',
          color: '#FFFFFF',
          '&:hover': {
            color: '#000000',
          },
        }}
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </SvgIcon>
    </Link>
    <Link
      href="mailto:elijahmsilverman@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: '#0dec7c',
        textDecoration: 'underline',
        textDecorationColor: 'rgba(13, 236, 124, 0.4)',
        '&:hover': {
          textDecorationColor: 'inherit',
        },
      }}
    >
      <EmailOutlinedIcon
        sx={{
          fontSize: '44px',
          color: '#FFFFFF',
          '&:hover': {
            color: '#657786',
          },
        }}
      />
    </Link>
  </Box>
);

export default SocialLinks; 