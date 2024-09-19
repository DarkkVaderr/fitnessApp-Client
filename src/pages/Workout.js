import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // For navigation
import AddWorkoutModal from '../components/AddWorkoutModal';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Fetch workouts from the backend API when the component loads
  useEffect(() => {
    const fetchWorkouts = async () => {
      const token = localStorage.getItem('token'); // Get the token to authenticate the request
      const response = await fetch('https://fitnessapp-api-ln8u.onrender.com/workouts', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setWorkouts(data.workouts || []); // Assuming 'workouts' is the array returned by your API
      } else {
        console.error('Failed to fetch workouts');
      }
    };

    fetchWorkouts();
  }, []);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to the login page
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2>Your Workouts</h2>
        <Button onClick={handleLogout} variant="danger">Logout</Button>
      </div>
      <Button id="addWorkout" className="mb-4" onClick={handleShow}>Add Workout</Button>

      <Row>
        {workouts.map((workout) => (
          <Col md={4} key={workout._id} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{workout.name}</Card.Title>
                <Card.Text>Duration: {workout.duration}</Card.Text>
                <Card.Text>Start Time: {new Date(workout.startTime).toLocaleString()}</Card.Text>
                <Card.Text>Finish Time: {new Date(workout.finishTime).toLocaleString()}</Card.Text>
                <Card.Text>Status: {workout.status ? 'Complete' : 'Incomplete'}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <AddWorkoutModal
        show={showModal}
        handleClose={handleClose}
        onWorkoutAdded={(newWorkout) => setWorkouts([...workouts, newWorkout])}
      />
    </Container>
  );
}
