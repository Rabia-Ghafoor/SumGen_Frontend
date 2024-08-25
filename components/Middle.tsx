  import React from "react";
  import { Box, Typography, Button, Container, Grid } from "@mui/material";
  import GroupsIcon from "@mui/icons-material/Groups";
  import EventIcon from "@mui/icons-material/Event";
  import GoogleIcon from "@mui/icons-material/Google";
  import NoteIcon from "@mui/icons-material/Note";
  import VideoCallIcon from "@mui/icons-material/VideoCall";
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import { useMediaQuery } from "@mui/material";

  const Middle: React.FC = () => {
    const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));  return (
      <Box sx={{ bgcolor: "#fff", py: 8 }}>
        <Container maxWidth="lg">
          {/* Integration Icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 6,
              ...(isMobile && {
                flexDirection: "column",
                alignItems: "center",
              }),
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {isMobile ? (
                // for Mobile layout
                <React.Fragment>
                  <Box sx={{ mt: 4, mr: 1 }}>
                    <IconCircle Icon={GroupsIcon} size={40} />
                  </Box>
                  <Box sx={{ mt: 2, mr: 2 }}>
                    <IconCircle Icon={GoogleIcon} size={40} />
                  </Box>
                  <Box sx={{ mt: -2 }}>
                    <IconCircle Icon={EventIcon} size={60} />
                  </Box>
                  <Box sx={{ mt: 2, ml: 2 }}>
                    <IconCircle Icon={NoteIcon} size={40} />
                  </Box>
                  <Box sx={{ mt: 4, ml: 1 }}>
                    <IconCircle Icon={VideoCallIcon} size={40} />
                  </Box>
                </React.Fragment>
              ) : (
                // for Desktop layout
                <React.Fragment>
                  <Box sx={{ mt: 8, mr: 2 }}>
                    <IconCircle Icon={GroupsIcon} size={60} />
                  </Box>
                  <Box sx={{ mt: 2, mr: 3 }}>
                    <IconCircle Icon={GoogleIcon} size={60} />
                  </Box>
                  <Box sx={{ mt: -3 }}>
                    <IconCircle Icon={EventIcon} size={80} />
                  </Box>
                  <Box sx={{ mt: 2, ml: 3 }}>
                    <IconCircle Icon={NoteIcon} size={60} />
                  </Box>
                  <Box sx={{ mt: 8, ml: 2 }}>
                    <IconCircle Icon={VideoCallIcon} size={60} />
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </Box>




          {/* Heading and Description */}
          <Typography
            variant="h2"
            align="center"
            fontFamily="Avertastd,sans-serif"
            gutterBottom
          >
            Seamless Transcription and Summary of your meetings
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Start by making comments on your documents, and seamlessly get
            transcriptions and summaries of your meetings. Capture every detail
            effortlessly, ensuring all key points are documented and easily
            accessible
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 50,
                px: 4,
                py: 1.5,
                bgcolor: "#000",
                color: "#fff",
              }}
            >
              View all Transcriptions
            </Button>
          </Box>

          <Box sx={{ bgcolor: "#126fd6", borderRadius: 4, p: 4, color: "#fff" }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom>
                  Get your meetings summary through Rilla ++
                </Typography>
                <Typography variant="body1" paragraph>
                  Subscribe to our newsletter to get the latest news
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "#fff", color: "#016aff" }}
                  >
                    Try free for 1 month
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ color: "#fff", borderColor: "#fff" }}
                  >
                    Book a demo
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative", height: 300 }}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bgcolor: "#000",
                      borderRadius: 2,
                      p: 2,
                      boxShadow: 3,
                    }}
                  >
                    <Typography variant="subtitle1">
                      Total Questions Asked
                    </Typography>
                    <Typography variant="h6">11 successfully answered</Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      bgcolor: "#000",
                      borderRadius: 2,
                      p: 2,
                      boxShadow: 3,
                    }}
                  >
                    <Typography variant="subtitle1">
                      Candidate Talk Time
                    </Typography>
                    <Typography variant="h6">
                      55% interview, 60% Discussion
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  };

  const IconCircle: React.FC<{
    Icon: React.ElementType;
    size: number;
  }> = ({ Icon, size }) => (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: "50%",
        bgcolor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon sx={{ fontSize: size * 0.6 }} />
    </Box>
  );
  export default Middle;
