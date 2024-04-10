// components/ExampleComponent.js

"use client"

import { useState, useEffect } from 'react';

interface IData {
  message: string;
}

function ExampleComponent() {
  const [data, setData] = useState<IData | null>(null); // Specify the type of data

  useEffect(() => {
    // Fetch data from the backend API
    fetch('/api/Server')
      .then((response) => response.json())
      .then((data) => setData(data as IData)) // Type assertion to IData
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? (
        <p>{data.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ExampleComponent;
