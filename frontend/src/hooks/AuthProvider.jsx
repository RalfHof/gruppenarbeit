import React, { createContext, useContext, useState } from 'react';
import useAuthHook from './useAuth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useAuthHook();
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (username, password) => {
    const user = await auth.handleLogin(username, password);
    setCurrentUser(user);
  };

  const handleRegister = async (username, password) => {
    const user = await auth.handleRegister(username, password);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    auth.handleLogout();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ ...auth, currentUser, handleLogin, handleRegister, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

