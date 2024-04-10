import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TitleUpdater from './titleUpdater';

describe('TitleUpdater component', () => {
  beforeEach(() => {
    document.title = '';
  });

  it('updates the document title when the button is clicked', () => {
    const { getByText } = render(<TitleUpdater />);
    const button = getByText('Click me to update title');
    
    fireEvent.click(button);

    expect(document.title).toBe('You clicked 1 times');
  });

  it('updates the count when the button is clicked', () => {
    const { getByText } = render(<TitleUpdater />);
    const button = getByText('Click me to update title');

    fireEvent.click(button);

    expect(getByText('You clicked 1 times')).toBeInTheDocument();
  });
});
