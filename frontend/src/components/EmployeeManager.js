// src/EmployeeManager.js
import React, { useState, useEffect } from "react";
import axios from "axios";


const EmployeeManager = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState({
    id: '',
    name: '',
    surname: '',
    age: '',
    role: ''
  });
  const [isEditing, setIsEditing] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Load employees from Firebase on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get('http://localhost:5000/employees');
    setList(response.data);
  };

  const addOrUpdateEmployee = async () => {
    if (isEditing) {
      await axios.put(`http://localhost:5000/employees/${isEditing}`, input);
      setIsEditing(null);
    } else {
      await axios.post('http://localhost:5000/employees/add', input);
    }
    setInput({ id: '', name: '', surname: '', age: '', role: '' });
    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:5000/employees/${id}`);
    fetchEmployees();
  };

  const editEmployee = (employee) => {
    setInput(employee);
    setIsEditing(employee.id);
  };

  const filteredList = list.filter(employee =>
    employee.id.includes(searchQuery)
  );

  return (
    <div className="employee-position">
      <h1>Employee Management</h1>

      {/* Search Input for ID */}
      <input
        type="text"
        placeholder="Search by ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Form inputs for employee details */}
      <input
        type="text"
        value={input.id}
        placeholder="ID"
        onChange={(e) => setInput({ ...input, id: e.target.value })} 
      />
      <input
        type="text"
        value={input.name}
        placeholder="Name"
        onChange={(e) => setInput({ ...input, name: e.target.value })} 
      />
      <input
        type="text"
        value={input.surname}
        placeholder="Surname"
        onChange={(e) => setInput({ ...input, surname: e.target.value })} 
      />
      <input
        type="text"
        value={input.age}
        placeholder="Age"
        onChange={(e) => setInput({ ...input, age: e.target.value })} 
      />
      <input
        type="text"
        value={input.role}
        placeholder="Role"
        onChange={(e) => setInput({ ...input, role: e.target.value })} 
      />

      <button onClick={addOrUpdateEmployee}>
        {isEditing ? 'Update Data' : 'Add Data'}
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.age}</td>
              <td>{employee.role}</td>
              <td>
                <button onClick={() => editEmployee(employee)}>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManager;
