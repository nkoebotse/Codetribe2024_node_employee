// components/EmployeeForm.js
import React from 'react';

const EmployeeForm = ({ input, setInput, handleFileChange, addOrUpdateTodo, isEditing }) => {
  return (
    <div>
      <input type="text" value={input.ID} placeholder="ID" onChange={(e) => setInput({ ...input, ID: e.target.value })} />
      <input type="text" value={input.name} placeholder="Name and Surname" onChange={(e) => setInput({ ...input, name: e.target.value })} />
      <input type="text" value={input.surname} placeholder="Email address" onChange={(e) => setInput({ ...input, surname: e.target.value })} />
      <input type="text" value={input.phone} placeholder="Phone Number" onChange={(e) => setInput({ ...input, phone: e.target.value })} />
      <input type="text" value={input.position} placeholder="Employee position" onChange={(e) => setInput({ ...input, position: e.target.value })} />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={addOrUpdateTodo}>{isEditing ? 'Update Data' : 'Add Data'}</button>
    </div>
  );
};

export default EmployeeForm;
