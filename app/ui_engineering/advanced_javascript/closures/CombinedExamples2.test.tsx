import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CombinedExamples from './CombinedExamples2';

describe('CombinedExamples Component', () => {
  it('should toggle visibility on button click', () => {
    const { getByText, queryByText } = render(<CombinedExamples />);
    
    // Initial state: component should not render the paragraph
    expect(queryByText('This is visible!')).toBeNull();

    // Click on the toggle button
    fireEvent.click(getByText('Toggle'));

    // After clicking, the component should render the paragraph
    expect(queryByText('This is visible!')).toBeInTheDocument();

    // Click again on the toggle button
    fireEvent.click(getByText('Toggle'));

    // After clicking again, the component should not render the paragraph
    expect(queryByText('This is visible!')).toBeNull();
  });
});
