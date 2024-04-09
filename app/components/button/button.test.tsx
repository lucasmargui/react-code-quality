// Button.test.tsx
import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import Button  from './button';

describe('Button component', () => {
  it('renders button correctly with children', () => {
    const onClickMock = jest.fn(); // Create a mock function
    const { getByTestId } = render(<Button onClick={onClickMock}/>);
    const button = getByTestId('button');
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  it('calls onClick function when clicked', () => {
    const onClickMock = jest.fn(); // Create a mock function
    const { getByText } = render(<Button onClick={onClickMock} />);
    const button = getByText('Click me');
    fireEvent.click(button); // Simulate a click event

    expect(onClickMock).toHaveBeenCalled(); // Ensure that the onClick function has been called
  });
});
