// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import EmployeeManager from "./components/EmployeeManager";
import firebaseApp from './firebase'; // Import the Firebase configuration
import "./App.css";  // Importing the CSS file for styling

function App() {
  const backgroundStyle = {
    backgroundImage: 'url("/assets/salt-harvesting-3060093_1280.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content horizontally
  };

  return (
    <div style={backgroundStyle}>
      <Navbar />
      <div style={{ width: '100%', maxWidth: '800px', marginTop: '20px' }}>
        <EmployeeManager />
      </div>
    </div>
  );
}

export default App;
