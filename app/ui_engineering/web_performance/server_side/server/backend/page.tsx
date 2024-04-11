// ExampleComponent.js
import React, { useState } from 'react';


interface Data {
  message: string;
}


const ExampleComponent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {loading && <div data-testid="loading">Loading...</div>}
      {error && <div>Error fetching data: {error}</div>}
      {data && (
        <div>
          <p data-testid="data-message">{data.message}</p>
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;
