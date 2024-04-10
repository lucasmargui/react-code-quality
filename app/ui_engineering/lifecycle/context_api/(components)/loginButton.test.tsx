// LoginButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginButton from './loginButton';
import { AuthContext } from './authContext';

describe('LoginButton Component', () => {


  it('renders "Login" button when user is not logged in', () => {
    const authContextValue = {
      isLoggedIn: false,
      login: jest.fn(),
      logout: jest.fn()
    };

    const { getByText } = render(
      <AuthContext.Provider value={authContextValue}>
        <LoginButton />
      </AuthContext.Provider>
    );

    expect(getByText('Login')).toBeInTheDocument();
  });

  it('renders "Logout" button when user is logged in', () => {
    const authContextValue = {
      isLoggedIn: true,
      login: jest.fn(),
      logout: jest.fn()
    };

    const { getByText } = render(
      <AuthContext.Provider value={authContextValue}>
        <LoginButton />
      </AuthContext.Provider>
    );

    expect(getByText('Logout')).toBeInTheDocument();
  });

  it('calls login function when "Login" button is clicked', () => {
    const authContextValue = {
      isLoggedIn: false,
      login: jest.fn(),
      logout: jest.fn()
    };

    const { getByText } = render(
      <AuthContext.Provider value={authContextValue}>
        <LoginButton />
      </AuthContext.Provider>
    );

    fireEvent.click(getByText('Login'));
    expect(authContextValue.login).toHaveBeenCalled();
  });

  it('calls logout function when "Logout" button is clicked', () => {
    const authContextValue = {
      isLoggedIn: true,
      login: jest.fn(),
      logout: jest.fn()
    };

    const { getByText } = render(
      <AuthContext.Provider value={authContextValue}>
        <LoginButton />
      </AuthContext.Provider>
    );

    fireEvent.click(getByText('Logout'));
    expect(authContextValue.logout).toHaveBeenCalled();
  });
});
