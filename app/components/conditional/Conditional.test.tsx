import React from 'react';
import { render } from '@testing-library/react';
import ConditionalMessage from './Conditional';

describe('ConditionalMessage', () => {
  test('displays correct message when logged in', () => {
    const { getByText } = render(<ConditionalMessage isLoggedIn={true} />);
    const welcomeMessage = getByText(/Welcome back!/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('displays correct message when not logged in', () => {
    const { getByText } = render(<ConditionalMessage isLoggedIn={false} />);
    const loginMessage = getByText(/Please log in to view this content./i);
    expect(loginMessage).toBeInTheDocument();
  });
});
