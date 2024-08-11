// src/components/Dashboard/UserOutlet.jsx
import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function UserOutlet() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.msg);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Redirect to login if there's an authentication error
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const navLinkClasses = ({ isActive }) =>
    `block py-2 px-4 rounded transition-colors duration-200 ${
      isActive
        ? 'bg-white text-sky-600'
        : 'text-white hover:bg-white hover:text-sky-600'
    }`;

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-sky-600 text-white p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">User Details</h2>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>Role: {user.role}</p>
        </div>

        <ul className="space-y-4 mb-8">
          <li>
            <NavLink to="/dashboard" end className={navLinkClasses}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-queries" className={navLinkClasses}>
              My Queries
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-replies" className={navLinkClasses}>
              My Replies
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile" className={navLinkClasses}>
              My Profile
            </NavLink>
          </li>
        </ul>

        <button
          onClick={handleLogout}
          className="mt-auto bg-red-500 text-white p-2 rounded hover:bg-white hover:text-red-500 transition-colors duration-200"
        >
          Logout
        </button>
      </nav>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-8 bg-sky-100">
          <Outlet context={{ user }} />
        </div>
      </div>
    </div>
  );
}