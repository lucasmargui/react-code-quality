'use client';

import React, { useState, useMemo } from 'react';

const ExpensiveComponent: React.FC<{ data: number }> = ({ data }) => {
  
  const expensiveCalculation = () => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
      result += Math.random();
    }
    console.log("O resultado é" + result);
    return result;
  };

  const memoizedResult = useMemo(() => expensiveCalculation(), [data]);

  return (
    <div>
      <h2>Expensive Component</h2>
      <p>Data: {data}</p>
      <p>Result: {memoizedResult}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [data, setData] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleClick = () => {
    setData(prevData => prevData + 1);
  };

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle);
  };

  return (
    <div>
      <h1>React Memoization Example</h1>
      <button onClick={handleClick}>Increment Data</button>
      <button onClick={handleToggle}>Toggle Component</button>
      {toggle && <ExpensiveComponent data={data} />}
    </div>
  );
};

export default App;
