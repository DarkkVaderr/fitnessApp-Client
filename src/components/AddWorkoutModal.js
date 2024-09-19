import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function AddWorkoutModal({ show, handleClose, onWorkoutAdded }) {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddWorkout = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch('https://fitnessapp-api-ln8u.onrender.com/workouts/addWorkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, duration }),
    });

    const data = await response.json();
    if (response.ok) {
      onWorkoutAdded(data);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Workout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Workout Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter workout name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Enter duration" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleAddWorkout}>Add Workout</Button>
      </Modal.Footer>
    </Modal>
  );
}
