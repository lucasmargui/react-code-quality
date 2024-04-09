import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  test('should render input with placeholder', () => {
    const placeholderText = 'Enter your search term';
    const { getByPlaceholderText } = render(<SearchInput placeholder={placeholderText} onChange={() => {}} />);
    const inputElement = getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
  });

  test('should call onChange prop when input value changes', () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(<SearchInput placeholder="Search" onChange={onChangeMock} />);
    const inputElement = getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(onChangeMock).toHaveBeenCalledWith('test');
  });

  test('should clear input value when clear button is clicked', () => {
    const onChangeMock = jest.fn();
    const { getByTestId, getByPlaceholderText } = render(<SearchInput placeholder="Search" onChange={onChangeMock} />);
    const inputElement = getByPlaceholderText('Search');

    fireEvent.change(inputElement, { target: { value: 'test' } });

    const clearButton = getByTestId('clear-button');
    fireEvent.click(clearButton);

    expect(onChangeMock).toHaveBeenCalledWith('');
    expect(inputElement).toHaveValue('');
  });

  test('should not render clear button when input value is empty', () => {
    const { queryByTestId } = render(<SearchInput placeholder="Search" onChange={() => {}} />);
    const clearButton = queryByTestId('clear-button');
    expect(clearButton).toBeNull();
  });
});
