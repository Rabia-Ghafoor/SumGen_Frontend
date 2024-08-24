import { Paper, Typography, Chip, Box } from '@mui/material';

interface FeatureCardProps {
  title: string;
  description: string;
  isNew?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, isNew }) => {
  return (
    <Paper elevation={1} sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 3, borderRadius: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#1a2b49' }}>
          {title}
        </Typography>
        {isNew && (
          <Chip label="NEW" color="error" size="small" sx={{ borderRadius: 5 }} />
        )}
      </Box>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
};

export default FeatureCard;