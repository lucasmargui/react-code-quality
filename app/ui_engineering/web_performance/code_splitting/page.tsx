"use client"

// App.js
import React, { Suspense, lazy } from 'react';
import ComponenteA from './components/componentA';

const ComponenteB = lazy(() => import('./components/componentB'));
const ComponenteC = lazy(() => import('./components/componentC'));
const ComponenteD = lazy(() => import('./components/componentD'));

const App = () => {

  return (
    <div>
    <ComponenteA />
      <Suspense fallback={<div>Carregando...</div>}>
        <ComponenteB />
        <ComponenteC />
        <ComponenteD />
      </Suspense>
    </div>
  );
};

export default App;
