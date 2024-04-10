"use client"

// AuthContext.js
import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthComponentWithContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


// interface AuthContextType { ... }: This defines an interface AuthContextType which describes the shape of the authentication context. It specifies that the context will have three properties: isLoggedIn of type boolean, login and logout both of which are functions with no arguments and no return value.

// export const AuthContext = createContext<AuthContextType | undefined>(undefined);: This line creates an authentication context using createContext. It initializes it with an initial value of undefined, and it's typed to adhere to the AuthContextType interface or undefined.

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => { ... }: This is a functional component named AuthProvider. It accepts children as props, which are of type ReactNode. It wraps its children with the AuthContext.Provider.

// const [isLoggedIn, setIsLoggedIn] = useState(false);: This line initializes a state variable isLoggedIn using the useState hook. It's initialized with a value of false, indicating that the user is not logged in by default.

// const login = () => { setIsLoggedIn(true); };: This function sets the isLoggedIn state to true, simulating a login action.

// const logout = () => { setIsLoggedIn(false); };: This function sets the isLoggedIn state to false, simulating a logout action.

// <AuthContext.Provider value={{ isLoggedIn, login, logout }}> ... </AuthContext.Provider>: This line renders the AuthProvider component with the authentication context provider. It provides the context value with the isLoggedIn state, login, and logout functions to its children components.