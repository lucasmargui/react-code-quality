import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import Counter from './SetState';

describe('Counter component', () => {


    let component: RenderResult;

    beforeEach(() => {
      component = render(<Counter />);
    });
  

  it('increments count when button is clicked', () => {
    const { getByText } = component;
    const incrementButton = getByText('Increment');
    fireEvent.click(incrementButton);
    const countElement = getByText('Count: 1');
    expect(countElement).toBeInTheDocument();
  });

  it('decrements count when button is clicked', () => {
    const { getByText } = component;
    const decrementButton = getByText('Decrement');
    fireEvent.click(decrementButton);
    const countElement = getByText('Count: -1');
    expect(countElement).toBeInTheDocument();
  });

  it('renders correct initial count', () => {
    const { getByText } = component;
    const countElement = getByText('Count: 0');
    expect(countElement).toBeInTheDocument();
  });

  it('resets count when reset button is clicked', () => {
    const { getByText } = component;
    const incrementButton = getByText('Increment');
    const resetButton = getByText('Reset');
    fireEvent.click(incrementButton);
    fireEvent.click(resetButton);
    const countElement = getByText('Count: 0');
    expect(countElement).toBeInTheDocument();
  });


});
