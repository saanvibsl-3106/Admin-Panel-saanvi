// src/components/Dashboard/Profile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.msg);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to fetch user data. Please try again later.');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!userData) return <p>No user data available.</p>;

  return (
    <div className="flex-1 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(userData).map(([key, value]) => (
            <p key={key} className="text-gray-700">
              <span className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value.toString()}
            </p>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Update Profile</h2>
          {/* Add a form here for updating user details */}
          <p className="text-gray-600">Profile update functionality coming soon...</p>
        </div>
      </div>
    </div>
  );
}