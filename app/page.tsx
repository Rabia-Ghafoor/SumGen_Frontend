'use client';

import { useScrollTrigger } from '@mui/material';
import { Box, Container } from '@mui/material';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Middle from '../components/Middle';
import Footer from '../components/Footer';

export default function Home() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#03040b',
    }}>
      <Header isScrolled={trigger} />
      <Box sx={{ pt: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 }, mb: 8 }}>
          <Hero />
        </Container>
        <Middle />
        <Footer/>
      </Box>
    </Box>
  );
}