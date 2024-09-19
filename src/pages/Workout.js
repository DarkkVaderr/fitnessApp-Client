import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import AddWorkoutModal from '../components/AddWorkoutModal';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch workouts from the API (similar to previous code)
  }, []);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container>
      <h2 className="text-center my-4">Your Workouts</h2>
      <Button id="addWorkout" className="mb-4" onClick={handleShow}>Add Workout</Button>

      <Row>
        {workouts.map(workout => (
          <Col md={4} key={workout._id} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{workout.name}</Card.Title>
                <Card.Text>Duration: {workout.duration}</Card.Text>
                <Card.Text>Status: {workout.status ? 'Complete' : 'Incomplete'}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <AddWorkoutModal show={showModal} handleClose={handleClose} onWorkoutAdded={(newWorkout) => setWorkouts([...workouts, newWorkout])} />
    </Container>
  );
}
