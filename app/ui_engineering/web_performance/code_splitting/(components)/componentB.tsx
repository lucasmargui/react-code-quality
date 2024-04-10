// ComponenteB.js
import React, { useEffect, useState } from 'react';

const ComponenteB = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loaded ? (
        <h1>Componente B</h1>
      ) : (
        <h1>Carregando Componente B...</h1>
      )}
    </div>
  );
};

export default ComponenteB;
