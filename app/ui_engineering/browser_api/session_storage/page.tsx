"use client"

// components/StorageExample.tsx
import React, { useState, ChangeEvent, useEffect } from 'react';

const StorageExample = () => {
  const [localStorageValue, setLocalStorageValue] = useState('');
  const [sessionStorageValue, setSessionStorageValue] = useState('');

  useEffect(() => {
    // Retrieve values from localStorage and sessionStorage on component mount
    const localStorageItem = localStorage.getItem('localStorageItem');
    const sessionStorageItem = sessionStorage.getItem('sessionStorageItem');
    if (localStorageItem) setLocalStorageValue(localStorageItem);
    if (sessionStorageItem) setSessionStorageValue(sessionStorageItem);
  }, []);

  const handleLocalStorageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLocalStorageValue(value);
    localStorage.setItem('localStorageItem', value);
  };

  const handleSessionStorageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSessionStorageValue(value);
    sessionStorage.setItem('sessionStorageItem', value);
  };

  return (
    <div>
      <h2>Local Storage:</h2>
      <input
        type="text"
        value={localStorageValue}
        onChange={handleLocalStorageChange}
      />

      <h2>Session Storage:</h2>
      <input
        type="text"
        value={sessionStorageValue}
        onChange={handleSessionStorageChange}
      />

      {/* Display values in h1 elements */}
      <h1>LocalStorage Value: {localStorageValue}</h1>
      <h1>SessionStorage Value: {sessionStorageValue}</h1>
    </div>
  );
};

export default StorageExample;
