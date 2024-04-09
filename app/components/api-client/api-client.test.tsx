// UserList.test.tsx
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import UserList from './api-client';

describe('UserList', () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  it('fetches users on component creation and renders them', async () => {
    const mockUsers: { id: number; name: string }[] = [ // Provide type annotation
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];

    mockAxios.onGet('https://jsonplaceholder.typicode.com/users').reply(200, mockUsers);

    const { getByText } = render(<UserList />);

    await waitFor(() => {
      expect(getByText('User List')).toBeInTheDocument();
      expect(getByText('John')).toBeInTheDocument();
      expect(getByText('Jane')).toBeInTheDocument();
    });
  });

  it('handles errors during fetch', async () => {
    mockAxios.onGet('https://jsonplaceholder.typicode.com/users').reply(500);

    const { getByText } = render(<UserList />);

    await waitFor(() => {
      expect(getByText('User List')).toBeInTheDocument();
      expect(getByText('Error fetching users:')).toBeInTheDocument();
    });
  });
});
