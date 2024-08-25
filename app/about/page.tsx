'use client'
import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Lhasang Tulku Lama",
      image: "/profile2.jpg",
      description: "SWE Fellow @Headstarter AI | Exploring ML and AI | Aspire Leader '24 | Intern @Nobel Learning PBC |",
      linkedin: "https://www.linkedin.com/in/tulku18/",
      github: "https://github.com/mrlhasang18" 
    },
    {
      name: "Naveena Raipole",
      image: "/naveeba.jpeg",
      description: "MCS Grad @Arizona State University | Ex- Senior Software Engineer @GEP | NIT Warangal",
      linkedin: "https://www.linkedin.com/in/naveenaraipole/",
      github: "https://github.com/naveenaraipole97" 
    },
    {
      name: "Rabia Ghafoor",
      image: "/headshot.jpeg",
      description: "Computer Science @ IU Bloomington | President @ INgineering at IU | Interested in SWE and Product Management",
      linkedin: "https://www.linkedin.com/in/rabiaaghafoor/",
      github: "https://github.com/rabiaaghafoor" 
    },
    {
      name: "Salif Tankoano",
      image: "/salif.jpeg",
      description: "Software Engineering @Headstarter AI | Tech instructor | BlackStone Launchpad Alum",
      linkedin: "https://www.linkedin.com/in/salif-tankoano/",
      github: "https://github.com/saliftankoano" 
    }
  ];

  return (
    <Box sx={{ 
      bgcolor: '#121212', 
      color: 'white', 
      minHeight: '100vh', 
      py: 8, 
      px: 4 
    }}>
      <Typography variant="h2" component="h1" 
        sx={{ 
          textAlign: 'center', 
          mb: 6, 
          color: '#bb86fc',
          textShadow: '0 0 10px #3700b3, 0 0 20px #3700b3',
          fontWeight: 'bold'
        }}>
        Meet the Developers
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center' 
            }} >
              <Avatar 
                src={member.image} 
                alt={member.name}
                sx={{ width: 120, height: 120, mb: 2 }}
              />
              <Typography variant="h6" sx={{ mb: 1 }}>{member.name}</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>{member.description}</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={{ 
                    color: '#bb86fc', 
                    '&:hover': { color: '#3700b3' } 
                  }} />
                </Link>
                <Link href={member.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon sx={{ 
                    color: '#bb86fc', 
                    '&:hover': { color: '#3700b3' } 
                  }} />
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;