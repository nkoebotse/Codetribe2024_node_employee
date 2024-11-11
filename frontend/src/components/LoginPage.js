// src/components/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const onSubmitHandler = (event) => {
      event.preventDefault();
      // Add your authentication logic here
      // If successful, call onLogin
      if (username && password) { // Replace with actual authentication logic
        onLogin(); // Call the function to update login state
      }
    }
  
    const onChangeUsername = (event) => {
      setUsername(event.target.value);
    }
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
    }
  
    return (
      <div id="login-page">
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" autoComplete="off" onChange={onChangeUsername} value={username} type="text" />
          <label htmlFor="password">Password</label>
          <input id="password" autoComplete="off" onChange={onChangePassword} value={password} type="password" />
          <button type="submit" className="btn">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    )
}

export default LoginPage;
