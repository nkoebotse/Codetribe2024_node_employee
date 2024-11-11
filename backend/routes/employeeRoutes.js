const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

// Make sure this route is defined correctly
router.post('/add', employeeController.addEmployee);
router.get('/', employeeController.getEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
