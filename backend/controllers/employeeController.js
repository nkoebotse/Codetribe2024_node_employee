// backend/controllers/employeeController.js
const { db } = require('../config/firebaseConfig');
const { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } = require('firebase/firestore');

// Add an employee
const addEmployee = async (req, res) => {
  console.log(req.body); // Log the request body for debugging

  try {
    // Reference to the employees collection in Firestore
    const employeeRef = collection(db, 'employees');
    // Add new employee to Firestore
    const newEmployee = await addDoc(employeeRef, req.body);

    // Respond with status 201 and return the new employee's ID along with the data
    res.status(201).json({ id: newEmployee.id, ...req.body });
  } catch (error) {
    // Handle any errors that occur during the add operation
    res.status(500).json({ error: 'Error adding employee', details: error.message });
  }
};

// Get all employees
const getEmployees = async (req, res) => {
  try {
    const employeeRef = collection(db, 'employees');
    const snapshot = await getDocs(employeeRef);
    const employees = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching employees', details: error.message });
  }
};

// Get an employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const employeeRef = doc(db, 'employees', req.params.id);
    const employeeSnapshot = await getDoc(employeeRef);

    if (employeeSnapshot.exists()) {
      res.status(200).json({ id: employeeSnapshot.id, ...employeeSnapshot.data() });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching employee', details: error.message });
  }
};

// Update an employee
const updateEmployee = async (req, res) => {
  try {
    const employeeRef = doc(db, 'employees', req.params.id);
    await updateDoc(employeeRef, req.body);

    res.status(200).json({ id: req.params.id, ...req.body });
  } catch (error) {
    res.status(500).json({ error: 'Error updating employee', details: error.message });
  }
};

// Delete an employee
const deleteEmployee = async (req, res) => {
  try {
    const employeeRef = doc(db, 'employees', req.params.id);
    await deleteDoc(employeeRef);

    res.status(204).send(); // No content, as the employee is deleted
  } catch (error) {
    res.status(500).json({ error: 'Error deleting employee', details: error.message });
  }
};

// Export controller methods
module.exports = {
  addEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
