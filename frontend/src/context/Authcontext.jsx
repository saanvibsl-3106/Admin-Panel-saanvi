import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Function to log in and set token
  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    // Fetch user data after setting the token
    userAuthentication(newToken);
  };

  // Function to log out and clear token
  const logout = () => {
    setToken('');
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem('token');
  };

  // Function to fetch user data
  const userAuthentication = async (authToken) => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        updateIsAdmin(data.isAdmin || false); // Update isAdmin based on user data
      } else {
        console.error('Error fetching user data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to update isAdmin state
  const updateIsAdmin = (isAdminValue) => {
    setIsAdmin(isAdminValue);
  };

  // Fetch user data when the component mounts or token changes
  useEffect(() => {
    if (token) {
      userAuthentication(token);
    }
  }, [token]);

  // Provide authentication state and functions to children
  return (
    <AuthContext.Provider value={{ token, login, logout, user, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);
