import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Adminlogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      username: formData.username,
      password: formData.password,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    try {
      const response = await fetch('https://tfibackend-9apo.onrender.com/admin/login', requestOptions);
      const result = await response.text();
      console.log(result);
      navigate('/volunteer-list'); 
      // Assuming your API returns some indication of a successful login, adjust this condition accordingly
      if (result.message == 'Admin login successful') {
        // Navigate to another page upon successful login
        
      } else {
        // Handle unsuccessful login (e.g., display an error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., display an error message)
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="container mt-3 containerborder center">
        <h2 className="mb-4 mt-3 center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 mb-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
