"use client"

import React, { useState, useEffect, ChangeEvent } from 'react';

const CombinedExamples = () => {

  // Example 4: Passing Data to Child Components
  const [message, setMessage] = useState('');
  const handleMessageChange = 
  (newMessage: string) => {
    setMessage(newMessage); 
  };


  return (
    <div>
     

      {/* Example 4: Passing Data to Child Components */}
      <div>
        <ChildComponent onMessageChange={handleMessageChange} />
        <p>Parent Message: {message}</p>
      </div>

    </div>
  );
};

interface ChildComponentProps {
  onMessageChange: ( message: string ) => void;
}

const ChildComponent: React.FC <ChildComponentProps> = ({ onMessageChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onMessageChange(event.target.value);
  };

  return <input type="text" onChange={handleChange} />;
};

export default CombinedExamples;


