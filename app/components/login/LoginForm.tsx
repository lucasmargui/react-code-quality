"use client"

import React, { useState } from 'react';

export interface LoginFormProps {
  login: (email: string, password: string) => boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
      if (!success) {
        setError('Invalid credentials');
      }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      {error && <div data-testid="error-message">{error}</div>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-testid="email-input"
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-testid="password-input"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
