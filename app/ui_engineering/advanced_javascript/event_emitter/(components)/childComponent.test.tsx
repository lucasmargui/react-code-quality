// ChildComponent.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChildComponent from './childComponent';

test('ChildComponent button click', () => {
  const mockButtonClick = jest.fn(); // Create a mock function
  const { getByText } = render(<ChildComponent onButtonClick={mockButtonClick} />);

  const button = getByText('Click me!');
  fireEvent.click(button);

  expect(mockButtonClick).toHaveBeenCalledTimes(1);
});