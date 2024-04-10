"use client"

import React, { useState} from 'react';

const CombinedExamples = () => {
  // Example 1: Event Handlers
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1); // Closure over 'count'
  };

  
  return (
    <div>
      {/* Example 1: Event Handlers */}
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    </div>
  );
};


export default CombinedExamples;


