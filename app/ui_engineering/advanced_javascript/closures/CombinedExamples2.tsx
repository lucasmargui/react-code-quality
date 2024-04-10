"use client"

import React, { useState } from 'react';

const CombinedExamples = () => {

  
  // Example 2: Conditional Rendering
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Closure over 'isVisible'
  };

  
  return (
    <div>


      {/* Example 2: Conditional Rendering */}
      <div>
        <button onClick={toggleVisibility}>Toggle</button>
        {isVisible && <p>This is visible!</p>}
      </div>

    
    </div>
  );
};



export default CombinedExamples;


