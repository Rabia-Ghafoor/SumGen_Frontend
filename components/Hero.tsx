'use client'
import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper, Container } from "@mui/material";
import FeatureCard from "./FeatureCard";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    console.log(`Card "${title}" was clicked.`);
  };
  const handleStartForFreeClick = () => {
    navigate("../app/doc/page.tsx"); 
  };


  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: 11, overflow: "hidden", bgcolor: "#126fd6" }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 6, md: 8 },
            px: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              mb: 3,
            }}
          >
            Introducing Rilla++
            <span style={{ color: "#ffd700" }}>✨</span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: "#c3dcfa",
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
            }}
          >
            Boost your sales team&apos;s productivity with Rilla++. Effortlessly
            analyze call transcripts, collaborate through comments, and leverage
            AI for insightful summaries. Drive smarter decisions, faster.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 50,
              px: 4,
              py: 1.5,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              fontWeight: "bold",
              boxShadow: "0 4px 6px rgba(0, 128, 255, 0.25)",
              "&:hover": {
                boxShadow: "0 6px 8px rgba(0, 128, 255, 0.3)",
              },
            }}
            onClick={handleStartForFreeClick}
          >
            Start for Free
          </Button>
          <Box
            sx={{
              backgroundColor: "#f7f7f7",
              borderRadius: 10,
              p: 4,
              pt: 6,
              mt: 10,
              maxWidth: "1200px",
              mx: "auto",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleCardClick("Review Sales Transcripts")}
                >
                  <FeatureCard
                    title="Review Sales Transcripts"
                    description="Dive into detailed call transcripts with ease. Uncover insights and track performance to refine your sales strategies with Rilla ++."
                    isSelected={selectedCard === "Review Sales Transcripts"}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleCardClick("Discuss with Comments")}
                >
                  <FeatureCard
                    title="Discuss with Comments"
                    description="Engage your team in meaningful discussions. Add comments directly to transcripts, fostering collaboration and quick feedback."
                    isNew
                    isSelected={selectedCard === "Discuss with Comments"}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleCardClick("AI Transcript Summary")}
                >
                  <FeatureCard
                    title="AI Transcript Summary"
                    description="Save time with AI-powered summaries. Get concise, actionable insights from lengthy conversations in just seconds."
                    isNew
                    isSelected={selectedCard === "AI Transcript Summary"}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              backgroundColor: "#f7f7f7",
              borderRadius: 10,
              p: 4,
              mt: 4,
              height: "calc(3 * 100%)", 
              maxWidth: "1200px",
              mx: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selectedCard === "Review Sales Transcripts" && (
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "#4a4a4a",
                  maxWidth: "800px",
                  mx: "auto",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Dive into detailed call transcripts with ease. Uncover insights
                and track performance to refine your sales strategies with rilla ++.
              </Typography>
            )}
            {selectedCard === "Discuss with Comments" && (
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "#4a4a4a",
                  maxWidth: "800px",
                  mx: "auto",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Engage your team in meaningful discussions. Add comments
                directly to transcripts, fostering collaboration and quick
                feedback.
              </Typography>
            )}
            {selectedCard === "AI Transcript Summary" && (
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: "#4a4a4a",
                  maxWidth: "800px",
                  mx: "auto",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                Save time with AI-powered summaries. Get concise, actionable
                insights from lengthy conversations in just seconds.
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Hero;
