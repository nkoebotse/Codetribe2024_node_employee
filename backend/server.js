const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();


// Define allowed origins
const allowedOrigins = [
  'http://localhost:3000', // Replace with your frontend's local address
  'https://codetribe2024-node-employee.onrender.com' // Replace with your deployed frontend address
];

// Configure CORS
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., mobile apps, curl requests)
    if (!origin) return callback(null, true);

    // Check if the origin is in the allowedOrigins array
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow cookies and authentication headers
};

// Use CORS middleware with the specified options
app.use(cors(corsOptions));


// Your other middlewares, like body parser, go here
app.use(express.json());

// Your routes go here
// Example route
app.use('/employees', require('./routes/employeeRoutes')); // Adjust route as needed

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
