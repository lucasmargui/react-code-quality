// __tests__/Counter.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './page';


  

describe('Counter component', () => {

    

  it('renders the counter with initial count of 0', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('Count: 0')).toBeInTheDocument();
  });

  it('increments the count when the button is clicked', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');
    
    fireEvent.click(incrementButton);
    expect(getByText('Count: 1')).toBeInTheDocument();
  });


  it('retrieves count value from localStorage on component mount', () => {
    localStorage.setItem('count', '5');
    const { getByText } = render(<Counter />);
    
    expect(getByText('Count: 5')).toBeInTheDocument();
  });
});
