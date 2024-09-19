// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';  // Correct path
import Login from './pages/Login';        // Correct path
import Workouts from './pages/Workout';  // Correct path

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  );
}

export default App;
