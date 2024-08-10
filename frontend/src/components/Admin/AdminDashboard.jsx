// Admin.jsx
import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

const Admin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        if (!data || !data.msg.isAdmin) {
          throw new Error('User is not an admin');
        }
        setUser(data.msg);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) return <div>Loading...</div>;
  
  if (error || !user) return <Navigate to="/login" replace />;

  return (
    <div>
      <AdminNavbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;