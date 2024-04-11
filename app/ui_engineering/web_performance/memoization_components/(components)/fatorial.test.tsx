import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App, { factorialOf } from './fatorial'; // assuming App component is exported and factorialOf function is also exported

describe('App component', () => {

  test('rerenders on button click', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    const reRenderCountElement = screen.getByText('Re render 1');
    expect(reRenderCountElement).toBeInTheDocument();
  });

  test('calculates factorial correctly', () => {
    expect(factorialOf(5)).toBe(120);
    expect(factorialOf(0)).toBe(1);
    expect(factorialOf(1)).toBe(1);
  });
});
