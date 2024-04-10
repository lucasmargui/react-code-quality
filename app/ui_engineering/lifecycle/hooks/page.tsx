"use client"

import React, { useState, useEffect, useContext } from 'react';

// Context for theme
const ThemeContext = React.createContext('light');

// Component using useState
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// Component using useEffect
function TitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to update title
      </button>
    </div>
  );
}

// Component using useContext
function ThemeDisplay() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  );
}

// Combined component
function CombinedExample() {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <Counter />
        <hr />
        <TitleUpdater />
        <hr />
        <ThemeDisplay />
      </div>
    </ThemeContext.Provider>
  );
}

export default CombinedExample;
