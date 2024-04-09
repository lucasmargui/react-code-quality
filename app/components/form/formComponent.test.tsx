import React from 'react';
import { render, fireEvent, Matcher, MatcherOptions } from '@testing-library/react';
import FormComponent from './formComponent';

describe('FormComponent', () => {
  it('renders without crashing', () => {
    render(<FormComponent />);
  });

  it('displays error message when name and email are not provided', () => {
    const { getByTestId, getByText } = render(<FormComponent />);
    fireEvent.submit(getByTestId('form') as HTMLElement);
    expect(getByText('Name and Email are required')).toBeInTheDocument();
  });

  it('does not display error message when name and email are provided', () => {
    const { getByTestId, queryByText } = render(<FormComponent />);
    fireEvent.change(getByTestId('form').querySelector('#name') as HTMLElement, { target: { value: 'John' } });
    fireEvent.change(getByTestId('form').querySelector('#email') as HTMLElement, { target: { value: 'john@example.com' } });
    fireEvent.submit(getByTestId('form') as HTMLElement);
    expect(queryByText('Name and Email are required')).toBeNull();
  });

  it('updates name field value correctly', () => {
    const { getByTestId } = render(<FormComponent />);
    const nameInput = getByTestId('form').querySelector('#name') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'John' } });
    expect(nameInput.value).toBe('John');
  });

  it('updates email field value correctly', () => {
    const { getByTestId } = render(<FormComponent />);
    const emailInput = getByTestId('form').querySelector('#email') as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput.value).toBe('john@example.com');
  });

  it('displays error message when only name is not provided', () => {
    const { getByTestId, getByText } = render(<FormComponent />);
    fireEvent.change(getByTestId('form').querySelector('#email') as HTMLElement, { target: { value: 'john@example.com' } });
    fireEvent.submit(getByTestId('form') as HTMLElement);
    expect(getByText('Name and Email are required')).toBeInTheDocument();
  });

  it('displays error message when only email is not provided', () => {
    const { getByTestId, getByText } = render(<FormComponent />);
    fireEvent.change(getByTestId('form').querySelector('#name') as HTMLElement, { target: { value: 'John' } });
    fireEvent.submit(getByTestId('form') as HTMLElement);
    expect(getByText('Name and Email are required')).toBeInTheDocument();
  });

  it('clears error message when both name and email are provided after error', () => {
    const { getByTestId, queryByText } = render(<FormComponent />);
    fireEvent.submit(getByTestId('form') as HTMLElement);
    expect(queryByText('Name and Email are required')).toBeInTheDocument();
    fireEvent.change(getByTestId('form').querySelector('#name') as HTMLElement, { target: { value: 'John' } });
    fireEvent.change(getByTestId('form').querySelector('#email') as HTMLElement, { target: { value: 'john@example.com' } });
    fireEvent.submit(getByTestId('form') as HTMLElement);
    expect(queryByText('Name and Email are required')).toBeNull();
  });

  it('updates error message when name is provided but email is not', () => {
    const { getByTestId, getByText } = render(<FormComponent />);
    fireEvent.change(getByTestId('form').querySelector('#name') as HTMLElement, { target: { value: 'John' } });
    fireEvent.submit(getByTestId('form') as HTMLElement);
    expect(getByText('Name and Email are required')).toBeInTheDocument();
  });

  it('updates error message when email is provided but name is not', () => {
    const { getByTestId, getByText } = render(<FormComponent />);
    fireEvent.change(getByTestId('form').querySelector('#email') as HTMLElement, { target: { value: 'john@example.com' } });
    fireEvent.submit(getByTestId('form') as HTMLElement);
    expect(getByText('Name and Email are required')).toBeInTheDocument();
  });
});
