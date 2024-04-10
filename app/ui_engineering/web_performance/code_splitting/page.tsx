"use client"

// App.js
import React, { Suspense, lazy } from 'react';
import ComponenteA from '@/app/ui_engineering/web_performance/code_splitting/(components)/componentA';

const ComponenteB = lazy(() => import('@/app/ui_engineering/web_performance/code_splitting/(components)/componentB'));
const ComponenteC = lazy(() => import('@/app/ui_engineering/web_performance/code_splitting/(components)/componentC'));
const ComponenteD = lazy(() => import('@/app/ui_engineering/web_performance/code_splitting/(components)/componentD'));

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
