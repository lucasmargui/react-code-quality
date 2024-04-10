"use client"

import React, { useState, useEffect, useContext } from 'react';



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

export default TitleUpdater;
