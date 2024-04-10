"use client"

import React, { useState, useEffect } from 'react';

// Custom hook to track the window size
function useWindowSize() {
  // State to hold the window size
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Effect to update window size when it changes
  useEffect(() => {
    // Function to handle window resize event
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only once

  // Return the current window size
  return windowSize;
}

// Example component using the custom hook
function WindowSizeTracker() {
  // Get current window size using custom hook
  const { width, height } = useWindowSize();

  // Render component with window size
  return (
    <div>
      <h1>Window Size Tracker</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

// Usage
function App() {
  // Render WindowSizeTracker component within App
  return (
    <div>
      <WindowSizeTracker />
    </div>
  );
}

export default App;
