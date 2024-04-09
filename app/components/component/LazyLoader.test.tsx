// LazyLoader.test.js

import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import LazyLoader from './LazyLoader';

describe('LazyLoader', () => {
  it('renders lazy-loaded component without crashing', async () => {
    const { getByText } = render(<LazyLoader />);
    expect(getByText('Loading...')).toBeInTheDocument(); // Fallback should be visible initially
    await waitForElementToBeRemoved(() => getByText('Loading...')); // Wait for loading to finish
    expect(getByText('Lazy Component')).toBeInTheDocument(); // Check if lazy-loaded component is rendered
  });
});
