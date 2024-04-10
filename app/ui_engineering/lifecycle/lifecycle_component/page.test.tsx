import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import LifecycleExample from './page';

jest.useFakeTimers(); // Mock timers

describe('LifecycleExample', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with initial count value and button', () => {
    const { getByText } = render(<LifecycleExample />);
    expect(getByText('Count: 0')).toBeInTheDocument();
    expect(getByText('Increment Count')).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    const { getByText } = render(<LifecycleExample />);
    const incrementButton = getByText('Increment Count');
    act(() => {
      fireEvent.click(incrementButton);
    });
    expect(getByText('Count: 1')).toBeInTheDocument();
  });

  it('updates count every second', async () => {
    const { getByText } = render(<LifecycleExample />);
    act(() => {
      jest.advanceTimersByTime(1000); // Wait for one second
    });
    await waitFor(() => {
      expect(getByText('Count: 1')).toBeInTheDocument();
    });
    act(() => {
      jest.advanceTimersByTime(1000); // Wait for another second
    });
    await waitFor(() => {
      expect(getByText('Count: 2')).toBeInTheDocument();
    });
  });

  it('clears timer on unmount', () => {
    const { unmount } = render(<LifecycleExample />);
    const clearIntervalMock = jest.spyOn(global, 'clearInterval');
    unmount();
    expect(clearIntervalMock).toHaveBeenCalled();
  });
});
