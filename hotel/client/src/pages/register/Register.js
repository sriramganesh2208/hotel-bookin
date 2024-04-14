import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import "./Register.css"

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/auth/register', formData);
      console.log(response.data);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.response.data.message || 'Failed to register. Please try again later.');
    }
  };

  return (
    <div className='al'>
         <Container component="main" maxWidth="xs">
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          {error && <Typography variant="body2" color="error" style={{ marginTop: '0.5rem' }}>{error}</Typography>}
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '1rem' }}>
            Register
          </Button>
        </form>
      </div>
    </Container>
    </div>
   
  );
};

export default Register;
