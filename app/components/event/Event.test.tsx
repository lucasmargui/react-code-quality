import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Event from './Event';

describe('Event', () => {
  it('renders button with "Click Me" text', () => {
    const { getByText } = render(<Event onClick={() => {}} />);
    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  it('calls onClick function when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Event onClick={handleClick} />);
    const button = getByTestId('your-button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('passes event object to onClick function', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Event onClick={handleClick} />);
    const button = getByTestId('your-button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith(expect.any(Object)); // Check if event object is passed
  });

  it('renders additional text when prop is provided', () => {
    const additionalText = 'Additional Text';
    const { getByText } = render(<Event onClick={() => {}} additionalText={additionalText} />);
    const additionalTextElement = getByText(additionalText);
    expect(additionalTextElement).toBeInTheDocument();
  });

  it('does not render additional text when prop is not provided', () => {
    const { queryByText } = render(<Event onClick={() => {}} />);
    const additionalTextElement = queryByText('Additional Text');
    expect(additionalTextElement).toBeNull();
  });
});
