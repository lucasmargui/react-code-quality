// FormComponent.tsx

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: ''
  });

  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.name.trim() === '' || formData.email.trim() === '') {
      setErrorMessage('Name and Email are required');
    } else {
      setErrorMessage('');
      // Call submitForm method or perform any other action here
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          aria-label="Name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          aria-label="Email"
        />
      </div>
      {errorMessage && <div role="alert">{errorMessage}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
