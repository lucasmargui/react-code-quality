// ComponenteD.js
import React, { useEffect, useState } from 'react';

const ComponenteD = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loaded ? (
        <h1>Component D</h1>
      ) : (
        <h1>Carregando Componente D...</h1>
      )}
    </div>
  );
};

export default ComponenteD;
