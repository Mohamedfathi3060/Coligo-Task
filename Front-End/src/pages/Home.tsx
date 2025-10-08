import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';

interface HomeProps {
  setLog: React.Dispatch<React.SetStateAction<boolean>>;
}

function Home({ setLog }: HomeProps) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, []);
  const handleLogin = () => {
    setLog(true);
    navigate('/dashboard');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography
        variant='h3'
        sx={{ color: '#1976d2', fontWeight: 'bold', mb: 3 }}
      >
        Welcome to Coligo
      </Typography>

      <Button
        variant='contained'
        onClick={handleLogin}
        sx={{
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#155fa0',
          },
          fontSize: '1.1rem',
          px: 4,
          py: 1,
        }}
      >
        Login
      </Button>
    </Box>
  );
}

export default Home;
