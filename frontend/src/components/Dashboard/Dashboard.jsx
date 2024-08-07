// components/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/Authcontext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [expiryTime, setExpiryTime] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    // Decode token (simplified version)
    const base64Payload = token.split('.')[1];
    const payload = JSON.parse(atob(base64Payload));
    const expirationDate = new Date(payload.exp * 1000); // Convert to milliseconds
    setExpiryTime(expirationDate);

    // Calculate the time left until expiration
    const timeLeft = expirationDate.getTime() - Date.now();
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        logout(); // Log out when token expires
        navigate('/login'); // Redirect to login page
      }, timeLeft);

      // Clear the timer if the component is unmounted or token changes
      return () => clearTimeout(timer);
    } else {
      logout(); // Log out immediately if the token is already expired
      navigate('/login'); // Redirect to login page
    }
  }, [token, navigate, logout]);

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
