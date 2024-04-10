"use client"

import React, { useState, useEffect, ChangeEvent } from 'react';

const CombinedExamples = () => {


  // Example 5: Using Effect Hook
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); // Closure over 'seconds'
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run only once

  return (
    <div>
     

      {/* Example 5: Using Effect Hook */}
      <p>Elapsed Time: {seconds} seconds</p>
    </div>
  );
};



export default CombinedExamples;


