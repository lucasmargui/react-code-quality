// import React from 'react';
// import { render, unmountComponentAtNode } from 'react-dom';
// import { act } from 'react-dom/test-utils';
// import CombinedExamples from './CombinedExamples5';

// let container: HTMLElement | null = null;

// beforeEach(() => {
//   jest.useFakeTimers(); // Enable fake timers
//   // Setup a DOM element as a render target
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // Cleanup on exiting
//   if (container) {
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
//   }
// });

// describe('CombinedExamples component', () => {
//   it('renders elapsed time correctly', () => {
//     act(() => {
//       render(<CombinedExamples />, container);
//     });

//     // Check if the initial value is 0 seconds
//     expect(container!.textContent).toContain('Elapsed Time: 0 seconds');

//     // Simulate waiting for 3 seconds
//     act(() => {
//       jest.advanceTimersByTime(3000);
//     });

//     // Check if the elapsed time is updated correctly
//     expect(container!.textContent).toContain('Elapsed Time: 3 seconds');

//     // Simulate waiting for another 2 seconds
//     act(() => {
//       jest.advanceTimersByTime(2000);
//     });

//     // Check if the elapsed time is updated correctly again
//     expect(container!.textContent).toContain('Elapsed Time: 5 seconds');
//   });
// });


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CombinedExamples from './CombinedExamples1';

describe('CombinedExamples', () => {
  test('increments count when button is clicked', () => {
    const { getByText } = render(<CombinedExamples />);
    const incrementButton = getByText('Increment');
    fireEvent.click(incrementButton);
    const countDisplay = getByText('Count: 1');
    expect(countDisplay).toBeInTheDocument();
  });
});

