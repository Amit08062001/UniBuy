import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client'
import './index.css';  // Your CSS styles
import App from './App';  // Your main App component

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
