import { Box, Button, Stack, Typography } from '@mui/material';
import heroImage from './../assets/heroImage2.png';

export default function ExamTime() {
  const textGradientStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #0c6389ff, #469cf2ff, #60b8c3ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };
  return (
    <Stack
      direction={{ xs: 'column-reverse', lg: 'row' }}
      bgcolor='white'
      justifyContent='space-between'
      borderRadius={2}
      sx={{ mb: 3 }}
    >
      <Stack
        p={{ xs: '16px 12px 0 12px', lg: '16px 0 0 16px' }}
        width={{ xs: '100%', lg: '45%' }}
        textAlign={{ xs: 'center', lg: 'left' }}
        alignItems={{ xs: 'center', lg: 'flex-start' }}
      >
        <Typography style={textGradientStyle} variant='h1'>
          Exams time
        </Typography>
        <Typography color='#979595ff' fontWeight={600} mt={1}>
          Here we are, Are you ready to fight? Don't worry. We prepared some
          tips to be ready for your exams.
        </Typography>
        <Typography color='#b1b1b1ff' my={3} fontStyle='italic'>
          "Nothing happens until someone moves" -Albert Einstein{' '}
        </Typography>
        <Button
          variant='contained'
          sx={{
            bgcolor: '#60b8c3ff',
            width: 'fit-content',
            fontWeight: 'bold',
            px: '32px',
            py: '10px',
            borderRadius: '6px',
            boxShadow: 'none',
            textTransform: 'none',
            mb: { xs: 2, lg: 0 },
            '&:hover': {
              boxShadow: 'none',
            },
          }}
        >
          View exams tips
        </Button>
      </Stack>
      <Box width={{ xs: '100%', lg: '500px' }}>
        <img src={heroImage} alt='hero image' style={{ width: '100%' }} />
      </Box>
    </Stack>
  );
}
