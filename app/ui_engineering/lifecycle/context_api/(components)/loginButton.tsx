// LoginButton.js
import React, { useContext } from 'react';
import { AuthContext } from './authContext';

const LoginButton = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { isLoggedIn, login, logout } = authContext;

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default LoginButton;
