// pages/index.js
import React from 'react';
import Dog from '@/app/ui_engineering/advanced_javascript/prototype_inheritance/(components)/dog';

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Animal App</h1>
      <Dog name="Buddy" breed="Labrador" />
    </div>
  );
}

export default HomePage;
