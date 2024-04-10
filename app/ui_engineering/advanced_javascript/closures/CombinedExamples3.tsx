"use client"

import React, { useState, ChangeEvent } from 'react';

const CombinedExamples = () => {

  // Example 3: Managing Multiple State Variables
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value); // Closure over 'value2'
  };

  
  return (
    <div>
    
      {/* Example 3: Managing Multiple State Variables */}
      <div>
        <p>Value 1: {value1}</p>
        <input type="text" value={value2} onChange={handleChange} />
      </div>

     
    </div>
  );
};



export default CombinedExamples;


