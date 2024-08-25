import React from 'react';
import { Paper, Typography, Chip, Box } from "@mui/material";

interface FeatureCardProps {
  title: string;
  description: string;
  isNew?: boolean;
  isSelected?: boolean; 
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  isNew,
  isSelected, 
}) => {
  return (
    <Paper
      elevation={1}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 3,
        borderRadius: 5,
        backgroundColor: "#fff",
        cursor: "pointer",
        border: isSelected ? "1px solid #03040b" : "none", 
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "#1a2b49" }}
        >
          {title}
        </Typography>
        {isNew && (
          <Chip
            label="NEW"
            color="error"
            size="small"
            sx={{ borderRadius: 5 }}
          />
        )}
      </Box>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
};

export default FeatureCard;