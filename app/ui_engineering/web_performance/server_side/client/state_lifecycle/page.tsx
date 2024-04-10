"use client"

import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Equivalent to componentDidMount and componentDidUpdate in a class component
  useEffect(() => {
    console.log('Component did mount or update');
    // You can perform any side-effects here
    document.title = `Count: ${count}`;

    // Equivalent to componentWillUnmount in a class component
    return () => {
      console.log('Component will unmount');
      // Clean up any resources or subscriptions here
    };
  }, [count]); // This effect depends on the count state

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;
