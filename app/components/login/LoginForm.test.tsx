import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import LoginForm, { LoginFormProps } from './LoginForm'; // Import LoginFormProps from the component file

describe('LoginForm component', () => {
  let component: RenderResult;

  beforeEach(() => {
    const mockLogin = jest.fn();
    const loginProps: LoginFormProps = { login: mockLogin }; // Provide the required login prop
    component = render(<LoginForm {...loginProps} />);
  });

  it('sets email and password data when input changes', () => {
    const emailInput = component.getByTestId('email-input') as HTMLInputElement;
    const passwordInput = component.getByTestId('password-input') as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });

  it('calls login method when form is submitted', () => {
    const mockLogin = jest.fn();
    component.rerender(<LoginForm login={mockLogin} />);
    const form = component.getByTestId('form');

    fireEvent.submit(form);

    expect(mockLogin).toHaveBeenCalled();
  });


  it('displays error message for invalid credentials', () => {
    const mockLogin = jest.fn(() => false);
    component.rerender(<LoginForm login={mockLogin} />);
    const form = component.getByTestId('form');
    const emailInput = component.getByTestId('email-input') as HTMLInputElement;
    const passwordInput = component.getByTestId('password-input') as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });
    fireEvent.submit(form);

    expect(component.getByText('Invalid credentials')).toBeInTheDocument();
  });

  it('logs in successfully with valid credentials', () => {
    const mockLogin = jest.fn(() => true);
    component.rerender(<LoginForm login={mockLogin} />);
    const form = component.getByTestId('form');
    const emailInput = component.getByTestId('email-input') as HTMLInputElement;
    const passwordInput = component.getByTestId('password-input') as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'validpassword' } });
    fireEvent.submit(form);

    expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'validpassword');
    expect(component.queryByText('Invalid credentials')).toBeNull();
  });
});
