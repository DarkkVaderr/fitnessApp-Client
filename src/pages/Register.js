import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation after registration
import { Container, Form, Button } from 'react-bootstrap'; // Using Bootstrap components

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleRegister = async (e) => {
    e.preventDefault();

    // Input validation
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Registration request
    try {
      const response = await fetch('https://fitnessapp-api-ln8u.onrender.com/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Registration failed.');
      } else {
        setSuccessMessage('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login'); // Redirect to login after 2 seconds
        }, 2000);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
      <div style={{ width: '300px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center" style={{ color: '#0056b3' }}>Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#0056b3' }}>Email</Form.Label>
            <Form.Control 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter email" 
              style={{ borderColor: '#0056b3' }} 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#0056b3' }}>Password</Form.Label>
            <Form.Control 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter password" 
              style={{ borderColor: '#0056b3' }} 
            />
          </Form.Group>
          <Button type="submit" className="w-100" style={{ backgroundColor: '#0056b3', borderColor: '#0056b3' }}>Register</Button>
          {error && <p className="text-danger mt-3">{error}</p>}
          {successMessage && <p className="text-success mt-3">{successMessage}</p>}
        </Form>
      </div>
    </Container>
  );
}
