const express = require('express');
const cors = require('cors'); // Import the cors package

const app = express();

// Middleware to enable CORS for all routes
app.use(cors());

// Your other middlewares, like body parser, go here
app.use(express.json());

// Your routes go here
// Example route
app.use('/employees', require('./routes/employeeRoutes')); // Adjust route as needed

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
