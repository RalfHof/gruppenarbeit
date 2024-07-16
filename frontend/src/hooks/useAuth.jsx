import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthHook = () => { // Umbenennen zu `useAuthHook`
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    // Hier solltest du eine Anfrage an dein Backend senden, um den Benutzer zu authentifizieren
    // Nach erfolgreicher Authentifizierung, setze den Benutzer
    setUser({ username });
    navigate('/');
  };

  const handleRegister = (username, password) => {
    // Hier solltest du eine Anfrage an dein Backend senden, um den Benutzer zu registrieren
    // Nach erfolgreicher Registrierung, setze den Benutzer
    setUser({ username });
    navigate('/');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return {
    user,
    handleLogin,
    handleRegister,
    handleLogout
  };
};

export default useAuthHook; // Verwenden von `useAuthHook`



