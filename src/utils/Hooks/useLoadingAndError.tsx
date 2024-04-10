import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Paper, Grid, Typography, Button, CardMedia } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'

const useLoadingAndError = (isLoading: boolean, error: string | null) => {
    if (isLoading) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <CircularProgress />
        </Box>
      );
    }
  
    if (error) {
        return (
            <Container style={{ marginTop: '20px', textAlign: 'center' }}>
              <Typography variant="h6" color="error">
                Error loading products: {error}
              </Typography>
            </Container>
          );
    }
  
    return null;
  };

  export default useLoadingAndError;
