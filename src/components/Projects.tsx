'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Projects = () => {
  const projects = [
    {
      name: 'treadlite\n 🌳 👣 🌲 ',
      link: 'https://www.loom.com/share/ae32fcb31548443dbf038873b9d6cf8d',
    },
    {
      name: 'snap-note\n 📅 📝 🗃️',
      link: 'https://www.loom.com/share/769b5eeaf5464faea42578b015a38423?sharedAppSource=personal_library',
    },
    {
      name: 'stuck-in-space\n 🚀 👽 👾',
      link: 'https://www.loom.com/share/8db58058dc9a4bc09161d47fb4a2b199',
    },
    {
      name: 'match-it\n 🎥 🍔 🎮',
      link: 'https://theperfectmatch.netlify.app',
    },
    {
      name: 'Night Cookies\n 🍪 🌙 ❤️',
      link: 'https://adoring-visvesvaraya-e7514b.netlify.app',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ color: 'text.primary' }}>
      <Typography
        variant="body1"
        align="center"
        sx={{
          pb: 15,
          fontSize: '4rem',
          '@media only screen and (max-width: 500px)': {
            fontSize: '3rem',
            pb: 3,
          },
        }}
      >
        Projects
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{
          justifyContent: 'center',
          alignItems: 'stretch',
          textAlign: 'center',
          whiteSpace: 'pre-line',
          '@media (min-width: 600px)': {
            spacing: 2,
          },
          '@media (min-width: 900px)': {
            spacing: 3,
          },
        }}
      >
        {projects.map((project, index) => (
          <Grid
            key={index}
            sx={{
              minHeight: '45vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 2,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '@media only screen and (max-width: 500px)': {
                minHeight: '0vh',
                padding: 1,
              },
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography
              component="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              alt={project.name}
              sx={{
                display: 'block',
                width: '100%',
                height: '100%',
                textDecoration: 'none',
                fontSize: '1.7rem',
                lineHeight: 1.2,
                '@media only screen and (max-width: 500px)': {
                  fontSize: '1.5rem',
                },
                '&:hover': {
                  textDecoration: 'none',
                  color: 'inherit',
                },
              }}
            >
              {project.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 