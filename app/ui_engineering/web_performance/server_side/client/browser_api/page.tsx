
"use client"

import { useEffect, useState } from 'react';

interface Geolocation {
  latitude: number;
  longitude: number;
}

const MyComponent = () => {
  const [geolocation, setGeolocation] = useState<Geolocation | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setGeolocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      {geolocation ? (
        <div>
          <p>Latitude: {geolocation.latitude}</p>
          <p>Longitude: {geolocation.longitude}</p>
        </div>
      ) : (
        <p>Loading geolocation...</p>
      )}
    </div>
  );
};

export default MyComponent;
