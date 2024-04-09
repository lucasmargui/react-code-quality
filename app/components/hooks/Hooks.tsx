// ExampleComponent.tsx

import React, { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
}

const ExampleComponent: React.FC = () => {
  const [data, setData] = useState<Item[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data', error);
    }
  };

  return (
    <div>
      {error ?? (<p>{error}</p>) }  
      {data ? (
        <ul>
          {data.map((item: Item, index: number) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ExampleComponent;
