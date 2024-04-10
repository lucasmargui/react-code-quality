import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CombinedExamples from './CombinedExamples4';

describe('CombinedExamples component', () => {
  test('should update parent message when child component changes', () => {
    const { getByRole, getByText } = render(<CombinedExamples />);
    
    const inputElement = getByRole('textbox');
    
    fireEvent.change(inputElement, { target: { value: 'New message' } });
    
    expect(getByText('Parent Message: New message')).toBeInTheDocument();
  });
});
