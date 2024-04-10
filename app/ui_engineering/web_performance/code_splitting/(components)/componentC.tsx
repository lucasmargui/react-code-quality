// ComponenteC.js
import React, { useEffect, useState } from 'react';

const ComponenteC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loaded ? (
        <h1>Componente C</h1>
      ) : (
        <h1>Carregando Componente C...</h1>
      )}
    </div>
  );
};

export default ComponenteC;