import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CombinedExamples from './CombinedExamples3';

describe('CombinedExamples', () => {
  it('renders with initial state values', () => {
    const { getByText, getByDisplayValue } = render(<CombinedExamples />);

    // Check if the component renders with initial state values
    expect(getByText('Value 1: 0')).toBeInTheDocument();
    expect(getByDisplayValue('')).toBeInTheDocument();
  });

  it('updates state correctly when input changes', () => {
    const { getByDisplayValue } = render(<CombinedExamples />);

    // Simulate user typing in the input field
    fireEvent.change(getByDisplayValue(''), { target: { value: 'Test Value' } });

    // Check if the state has been updated correctly
    expect(getByDisplayValue('Test Value')).toBeInTheDocument();
  });
});
