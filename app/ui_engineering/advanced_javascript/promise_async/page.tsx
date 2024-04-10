"use client"

import React, { useState, useEffect } from 'react';

const fetchData = () => {
  return new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      // Simulating fetching data from an API
      const data = ['Item 1', 'Item 2', 'Item 3'];
      if (data.length > 0) {
        resolve(data);
      } else {
        reject('Error fetching data');
      }
    }, 2000);
  });
};

const MyComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;