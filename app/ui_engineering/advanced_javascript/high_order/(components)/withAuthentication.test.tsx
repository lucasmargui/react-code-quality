// withAuthentication.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import withAuthentication, { WithAuthenticationProps } from './withAuthentication';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock a simple component that consumes isAuthenticated prop
const MockComponent: React.FC<WithAuthenticationProps> = ({ isAuthenticated }) => (
  <div>{isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</div>
);

describe('withAuthentication', () => {
  it('passes isAuthenticated prop correctly when user is authenticated', () => {
    // Set the localStorage item to simulate authentication


    const ComponentWithAuthentication = withAuthentication(MockComponent);

    localStorageMock.getItem.mockReturnValue('true');
    const { getByText } = render(<ComponentWithAuthentication isAuthenticated={true} />);
    
    expect(getByText('Authenticated')).toBeInTheDocument();
  });

  it('passes isAuthenticated prop correctly when user is not authenticated', () => {
    // Set the localStorage item to simulate not being authenticated
 

    const ComponentWithAuthentication = withAuthentication(MockComponent);

    localStorageMock.getItem.mockReturnValue('false');
    const { getByText } = render(<ComponentWithAuthentication isAuthenticated={false} />);
    
    expect(getByText('Not Authenticated')).toBeInTheDocument();
  });
});
