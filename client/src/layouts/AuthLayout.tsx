import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, Paper, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const AuthContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: theme.spacing(2),
}));

const AuthPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 500,
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const Logo = styled('img')(({ theme }) => ({
  width: 120,
  marginBottom: theme.spacing(2),
}));

const AuthLayout: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        backgroundImage: 'url(/images/music-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <AuthContainer maxWidth="sm">
        <AuthPaper elevation={3}>
          <Logo src="/images/logo.svg" alt="Music Education Scheduler" />
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="primary"
            gutterBottom
          >
            Music Education Scheduler
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center" sx={{ mb: 3 }}>
            Streamline your music teaching and learning experience
          </Typography>
          <Box sx={{ width: '100%' }}>
            <Outlet />
          </Box>
        </AuthPaper>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
          &copy; {new Date().getFullYear()} Music Education Scheduler. All rights reserved.
        </Typography>
      </AuthContainer>
    </Box>
  );
};

export default AuthLayout;