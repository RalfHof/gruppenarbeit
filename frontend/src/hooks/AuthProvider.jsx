import React, { createContext, useContext, useState } from 'react';
import useAuthHook from './useAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useAuthHook();
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (email, password) => {
    const user = await auth.handleLogin(email, password);
    setCurrentUser(user);
  };

  const handleRegister = async (formData) => {
    const user = await auth.handleRegister(formData);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    auth.handleLogout();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, handleLogin, handleRegister, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


