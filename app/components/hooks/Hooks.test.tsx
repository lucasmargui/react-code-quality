// ExampleComponent.test.tsx

import { render, waitFor, screen } from '@testing-library/react';

import ExampleComponent from './Hooks';

// Mock fetch function
const mockFetch = jest.fn();
(global as any).fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockClear();
});

describe('ExampleComponent', () => {
  test('fetches data and renders it correctly', async () => {
    const mockData = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];

    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    render(<ExampleComponent />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
  });

  test('displays error message if fetch fails', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<ExampleComponent />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Error fetching data')).toBeInTheDocument();
    });
  });

  test('calls fetch with correct URL', async () => {
    render(<ExampleComponent />);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
    });
  });

});
