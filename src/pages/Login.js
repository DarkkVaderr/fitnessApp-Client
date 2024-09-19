import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Logic for login (similar to previous code)
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div style={{ width: '300px' }}>
        <h2 className="text-center">Login</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter email" 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter password" 
            />
          </Form.Group>
          <Button className="w-100" onClick={handleLogin}>Login</Button>
          {error && <p className="text-danger mt-3">{error}</p>}
        </Form>
      </div>
    </Container>
  );
}
