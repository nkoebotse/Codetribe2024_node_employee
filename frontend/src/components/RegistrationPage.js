// src/Components/RegistrationPage.js
import React, { useState } from 'react';

const RegistrationPage = () => {
    const [newUser, setNewUser] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can store the registration data in local storage
        localStorage.setItem('userRegistration', JSON.stringify(newUser));
        alert('Registration successful!'); // You can replace this with actual registration logic
    };

    return (
        <div className="registration-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={newUser.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationPage;
