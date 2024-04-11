// App.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './page';

jest.mock('./components/componentB', () => {
  return () => <div>Component B</div>;
});

jest.mock('./components/componentC', () => {
  return () => <div>Component C</div>;
});

jest.mock('./components/componentD', () => {
  return () => <div>Component D</div>;
});

describe('App', () => {
  test('renders all components', async () => {
    const { getByText } = render(<App />);

    expect(getByText('Carregando...')).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText('Component B')).toBeInTheDocument();
      expect(getByText('Component C')).toBeInTheDocument();
      expect(getByText('Component D')).toBeInTheDocument();
    });
  });
});
