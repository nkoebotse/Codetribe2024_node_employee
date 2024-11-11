// components/EmployeeTable.js
import React from 'react';

const EmployeeTable = ({ list, editTodo, deleteTodo }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th>Position</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.ID}</td>
            <td>{todo.name}</td>
            <td>{todo.surname}</td>
            <td>{todo.phone}</td>
            <td>{todo.position}</td>
            <td>
              {todo.image && (
                <img src={URL.createObjectURL(todo.image)} alt="Employee" style={{ width: '50px', height: '50px' }} />
              )}
            </td>
            <td>
              <button onClick={() => editTodo(todo)}>Edit</button>
              <button onClick={() => deleteTodo(todo.id)}>&times; Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
