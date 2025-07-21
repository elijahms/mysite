'use client';

import React, { useState, useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';

interface AboutMeProps {
  scrollFunc: (section: string) => void;
}

const AboutMe = ({ scrollFunc }: AboutMeProps) => {
  const [skillsClass, setSkillsClass] = useState('basic');
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsClass('basic animate__animated animate__fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const aboutMeText =
    'As a Full Stack Developer with experience in the Financial Services industry and a background in Business Administration and Consulting, I bring a unique perspective to software engineering. With strong communication and collaboration skills, I am passionate about driving impact and progress within an organization. Proficient in technologies such as Angular, NestJS, SQL, Python, and more, I have worked on modern cloud-based projects and legacy codebases. In my free time, I enjoy staying active through cycling and diving, and hold a black belt in karate. I am always looking for new opportunities to learn and grow in my career. Let\'s connect and build something great together.';

  const skills = [
    'Javascript',
    'Python',
    'React',
    'Ruby',
    'Rails',
    'Angular',
    'NestJS',
    'SQL',
  ];

  return (
    <Container maxWidth="md" sx={{ color: 'text.primary' }}>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          fontSize: '3rem',
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="h5"
        sx={{
          '@media only screen and (max-width: 500px)': {
            fontSize: '1.2rem',
          },
        }}
      >
        {aboutMeText}
      </Typography>
      <Grid
        ref={skillsRef}
        container
        spacing={3}
        className={skillsClass}
        sx={{
          justifyContent: 'center',
          mt: 5,
          '@media only screen and (max-width: 500px)': {
            mt: 1,
            pr: 3,
            pl: 3,
          },
        }}
      >
        {skills.map((skill, index) => (
          <Grid
            key={index}
            sx={{
              pt: 2,
              pb: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontSize: '1.5rem',
                '@media only screen and (max-width: 500px)': {
                  fontSize: '1rem',
                },
              }}
            >
              {skill}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <div className="basic" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        <ArrowCircleUpRoundedIcon
          className="scroll-up-button"
          sx={{
            fontSize: '50px',
            color: '#06a86d',
            '&:hover': {
              color: '#edf5e1',
            },
          }}
          onClick={() => scrollFunc('about-me')}
        />
      </div>
    </Container>
  );
};

export default AboutMe; 