import React from 'react';
import { render, screen, act } from '@testing-library/react';
import LazyImage from './page'; // assuming this is the file where your component is defined

describe('LazyImage component', () => {
  beforeEach(() => {
    // Mocking IntersectionObserver
    class IntersectionObserverMock {
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = jest.fn();
      constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {}
    }
    window.IntersectionObserver = IntersectionObserverMock as any; // using 'as any' to bypass the type checking
  });

  test('renders with placeholder initially', () => {
    render(<LazyImage src="test.jpg" alt="Test Image" />);
    const placeholderImage = screen.getByAltText('Test Image');
    expect(placeholderImage).toBeInTheDocument();
    expect(placeholderImage).toHaveAttribute('src', ''); // Expecting empty src attribute
  });

});
