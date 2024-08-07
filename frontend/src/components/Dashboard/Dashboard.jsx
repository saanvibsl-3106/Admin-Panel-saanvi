// components/Dashboard/Dashboard.jsx
import React, { useEffect } from 'react';
import { useAuth } from '../../context/Authcontext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      // If no token, redirect to login page
      navigate('/login');
    }
  }, [token, navigate]); // Re-run effect when token changes

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">User Dashboard</h1>
        <p className="text-gray-600 mb-4">Welcome! You are logged in.</p>
        <p className="text-gray-500 mb-4">Token: {token}</p>
        <button
          onClick={logout}
          className="bg-red-500 text-white p-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
