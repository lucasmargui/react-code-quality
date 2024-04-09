import React, { useState } from 'react';

interface SearchInputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  const handleClearClick = () => {
    setInputValue('');
    onChange('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue && (
        <button data-testid="clear-button" onClick={handleClearClick}>
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchInput;
