import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // or however you're managing tokens
        const response = await axios.get('http://localhost:3000/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.msg);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from local storage
    navigate('/login'); // Redirect to login page
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-start p-8 bg-sky-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-sky-600 mb-4">User Details</h2>
        <div className="space-y-4">
          <div className="bg-sky-200 p-4 rounded">
            <p className="text-lg text-gray-700">Roll Number: {user.rollNo}</p>
            <p className="text-lg text-gray-700">Email: {user.email}</p>
            <p className="text-lg text-gray-700">Name: {user.name}</p>
            <p className="text-lg text-gray-700">Branch: {user.branch}</p>
            <p className="text-lg text-gray-700">Year: {user.year}</p>
            <p className="text-lg text-gray-700">Role: {user.role}</p>
            <p className="text-lg text-gray-700">Admin: {user.isAdmin ? 'Yes' : 'No'}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white p-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
