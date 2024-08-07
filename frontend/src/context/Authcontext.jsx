// context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState('');

  // Function to log in and set token
  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  // Function to log out and clear token
  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
    // Redirection happens in Dashboard component via useEffect
  };

  // Function to fetch user data
  const userAuthentication = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      } else {
        console.error('Error fetching user data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch user data when the component mounts or token changes
  useEffect(() => {
    if (token) {
      userAuthentication();
    }
  }, [token]);

  // Provide authentication state and functions to children
  return (
    <AuthContext.Provider value={{ token, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);
