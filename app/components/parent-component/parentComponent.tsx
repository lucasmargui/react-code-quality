import React from 'react';
import ChildComponent from './childComponent'; // Assuming ChildComponent is another component

const ParentComponent = () => {
  const handleChildClick = () => {
    // Handle child click event
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onClick={handleChildClick} testId="child-component" />
    </div>
  );
};

export default ParentComponent;
