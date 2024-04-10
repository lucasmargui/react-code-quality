import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CombinedExamples from './CombinedExamples1';

describe('CombinedExamples', () => {
  test('increments count when button is clicked', () => {
    const { getByText } = render(<CombinedExamples />);
    const incrementButton = getByText('Increment');
    fireEvent.click(incrementButton);
    const countDisplay = getByText('Count: 1');
    expect(countDisplay).toBeInTheDocument();
  });
});
