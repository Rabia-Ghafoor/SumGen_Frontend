'use client';

import { useState, useEffect } from 'react';
import { Box, Container, useScrollTrigger } from '@mui/material';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#03040b',
      pt: { xs: 8, md: 12 },
    }}>
      <Header isScrolled={trigger} />
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 }, mb: 8 }}>
        <Hero />
      </Container>
    </Box>
  );
}