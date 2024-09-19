// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap styles
import './theme.css';  // Add this import for the theme
import App from './App';          // Main app component
import { BrowserRouter as Router } from 'react-router-dom';  // Router for handling page navigation

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
