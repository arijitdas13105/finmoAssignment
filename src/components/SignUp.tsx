// SignUp.tsx
import React, { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { TextField, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
interface FormValues {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<string>('');

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      // Perform your form submission logic here
      localStorage.setItem('name', values.name);

      localStorage.setItem('email', values.email);
      localStorage.setItem('password', values.password);
      localStorage.setItem('isLoggedIn', 'false'); 
      navigate('/login')
      console.log('Form values:', values);
    } catch (error) {
      setError('An error occurred while submitting the form.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Box boxShadow={3} p={4} style={{ backgroundColor: 'white', borderRadius: 8, width: '100%' }}>
        <h1 style={{ textAlign: 'center' }}>Sign Up  Here </h1>
        <Formik
initialValues={{ name: '', email: '', password: '' }}
onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <TextField
  type="text"
  name="name"
  label="Name"
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.name}
  helperText={touched.name && errors.name}
  error={touched.name && Boolean(errors.name)}
  margin="normal"
  variant="outlined"
  fullWidth
/>
              <TextField
                type="email"
                name="email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              
              <TextField
                type="password"
                name="password"
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
                margin="normal"
                variant="outlined"
                fullWidth
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                color="primary"
                variant="contained"
                style={{ marginTop: '20px', width: '100%' }}
              >
                Submit
              </Button>
              <Link to="/login" style={{ marginTop: '20px', textAlign: 'center', display: 'block' }}>
                Already registered? Log in
              </Link>
            </form>
          )}
        </Formik>
        {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>{error}</p>}
      </Box>
    </Container>
  );
};

export default SignUp;

//  Not registered yet ? Sign Uo