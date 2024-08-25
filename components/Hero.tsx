import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper, Container } from "@mui/material";
import FeatureCard from "./FeatureCard";

const Hero = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setSelectedCard(title);
    console.log(`Card "${title}" was clicked.`);
  };

  return (
    <Paper
      elevation={3}
      sx={{ borderRadius: 11, overflow: "hidden", bgcolor: "#016aff" }}
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
            Introducing Meeting RillaAI{" "}
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
            Never take meeting notes again. Get transcripts, automated
            summaries, action items, and chat with Rilla AI to get answers from
            your meetings.
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
                  onClick={() => handleCardClick("AI Meeting Assistant")}
                >
                  <FeatureCard
                    title="AI Meeting Assistant"
                    description="Get automated meeting notes and summaries with action items using Rilla AI. Say goodbye to tedious note-taking."                    isSelected={selectedCard === "AI Meeting Assistant"}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleCardClick("Rilla AI Chat")}
                >
                  <FeatureCard
                    title="Rilla AI Chat"
                    description="Get answers and generate content like emails and status updates, using the power of Rilla AI Chat across all your meetings."
                    isNew
                    isSelected={selectedCard === "Rilla AI Chat"}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleCardClick("AI Channels")}
                >
                  <FeatureCard
                    title="AI Channels"
                    description="Combine live conversations with async updates. Chat with Rilla AI and teammates to get answers and drive projects forward."
                    isNew
                    isSelected={selectedCard === "AI Channels"}
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
              height: "calc(3 * 100%)", // Triple the height of the feature cards container
              maxWidth: "1200px",
              mx: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {selectedCard === "AI Meeting Assistant" && (
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
                Get automated meeting notes and summaries with action items
                using Rilla AI.
              </Typography>
            )}
            {selectedCard === "Rilla AI Chat" && (
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
                Get answers and generate content like emails and status updates,
                using the power of Rilla AI Chat across all your meetings.
              </Typography>
            )}
            {selectedCard === "AI Channels" && (
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
                  Combine live conversations with async updates. Chat with Rilla AI
                and teammates to get answers and drive projects forward.
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Hero;
