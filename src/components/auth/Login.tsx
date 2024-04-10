// Login.tsx

import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem('isLoggedIn', 'true'); 
      navigate('/products');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Container maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Box boxShadow={3} p={4} style={{ backgroundColor: 'white', borderRadius: 8, width: '100%', textAlign: 'center' }}>
        <Typography variant="h4" style={{ marginBottom: '20px' }}>Login</Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
        >
          Log In
        </Button>
        <Link to="/" style={{ marginTop: '20px', textAlign: 'center', display: 'block' }}>
        Not registered yet ? Sign Up
              </Link>
        
      </Box>
    </Container>
  );
};

export default Login;
