import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/Authcontext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Login() {
  const [email, setEmail] = useState(''); // Updated to use email instead of username
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useAuth(); // Extract login from context
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email, // Changed from username to email
        password,
      });

      // Extract token from response data
      const { token } = response.data;

      // Use the login function from context to set the token
      login(token);

      setMessage(response.data.message);
      setError('');

      // Fetch user data to determine admin status
      const userResponse = await axios.get('http://localhost:3000/api/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Extract user data
      const userData = userResponse.data;

      // Determine if user is an admin
      const isAdmin = userData.msg.isAdmin || false;

      // Redirect based on isAdmin status
      if (isAdmin) {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
      setMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
