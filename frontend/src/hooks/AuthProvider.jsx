import React, { createContext, useContext } from 'react';
import useAuthHook from './useAuth'; // Umbenennen zu `useAuthHook`

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useAuthHook(); // Verwenden von `useAuthHook`
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

