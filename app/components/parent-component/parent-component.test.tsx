import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ParentComponent from './parentComponent';
import ChildComponent from './childComponent';

describe('ParentComponent', () => {
  it('renders child component with correct props', () => {
    const { getByTestId } = render(<ParentComponent />);
    const childComponent = getByTestId('child-component');
    expect(childComponent).toBeInTheDocument();
    expect(childComponent).toHaveTextContent('Child Component');
  });

});

describe('ChildComponent', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<ChildComponent onClick={() => {}} testId="child-component" />);
    const childComponent = getByTestId('child-component');
    expect(childComponent).toBeInTheDocument();
    expect(childComponent).toHaveTextContent('Child Component');
  });

  it('calls onClick function when clicked', () => {
    const mockHandleClick = jest.fn(); // Mocking the onClick function
    const { getByTestId } = render(<ChildComponent onClick={mockHandleClick} testId="child-component" />);
    const childComponent = getByTestId('child-component');
    fireEvent.click(childComponent); // Simulate a click event on the child component
    expect(mockHandleClick).toHaveBeenCalled(); // Check if the onClick function is called
  });
});
