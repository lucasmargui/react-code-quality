"use client"

// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './(components)/childComponent';

const ParentComponent: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    console.log('Button clicked in ChildComponent');
    setIsClicked(true); // Set isClicked to true when the button is clicked
  };

  return (
    <div style={{ borderTop: '1px solid #ccc', marginTop: '20px', paddingTop: '20px', backgroundColor: 'red', height: 150 }}>
      <div style={{ borderTop: '1px solid #ccc', marginTop: '20px', paddingTop: '20px', backgroundColor: 'blue' }}>
      <ChildComponent onButtonClick={handleButtonClick} />
      {isClicked && 
         <h1>Button was clicked in ChildComponent</h1>
      }
       </div>
    </div>
  );
};

export default ParentComponent;