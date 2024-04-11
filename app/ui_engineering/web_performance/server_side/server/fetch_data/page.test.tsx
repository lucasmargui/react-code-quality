// ExampleComponent.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ExampleComponent from './page';

describe('ExampleComponent', () => {
  it('fetches and displays data when the button is clicked', async () => {
    // Mocking the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ message: 'Hello World' }),
    });

    const { getByText, getByTestId } = render(<ExampleComponent />);

    fireEvent.click(getByText('Fetch Data'));

    // Wait for the loading state to change
    await waitFor(() => expect(getByTestId('loading')).toBeInTheDocument());

    // Wait for the data to be displayed
    await waitFor(() => expect(getByTestId('data-message')).toHaveTextContent('Hello World'));

    // Check if the fetch function was called with the correct URL
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });

  it('displays an error message if fetching data fails', async () => {
    // Mocking the fetch function to simulate an error
    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));

    const { getByText, getByTestId } = render(<ExampleComponent />);

    fireEvent.click(getByText('Fetch Data'));

    // Wait for the loading state to change
    await waitFor(() => expect(getByTestId('loading')).toBeInTheDocument());

    // Wait for the error message to be displayed
    await waitFor(() => expect(getByText('Error fetching data: Failed to fetch')).toBeInTheDocument());
  });
});
