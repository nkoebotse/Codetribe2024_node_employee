// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

// Define allowed origins
const allowedOrigins = [
  'http://localhost:3000', // Replace with your frontend's local address
  'https://codetribe2024-node-employee.onrender.com', // Replace with your deployed frontend address
];

// Configure CORS
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Allow mobile apps and curl requests
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies and authentication headers
};

// Use CORS middleware
app.use(cors(corsOptions));

// Parse JSON request bodies
app.use(express.json());

// Use routes for employee-related API calls
app.use('/employees', employeeRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
