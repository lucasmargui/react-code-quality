
"use client"
// ComponenteB.js
import React, { useEffect, useState } from 'react';

const Component = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loaded ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Lazy Component</h1>
      )}
    </div>
  );
};

export default Component;