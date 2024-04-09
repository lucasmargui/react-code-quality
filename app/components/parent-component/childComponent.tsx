import React from 'react';

interface ChildComponentProps {
  onClick: () => void; // onClick prop should be a function that takes no arguments and returns void
  testId: string; // testId prop should be a string
}

const ChildComponent: React.FC<ChildComponentProps> = ({ onClick, testId }) => {
  const handleClick = () => {
    onClick(); // Call the function passed from the parent component
  };

  return (
    <div onClick={handleClick} data-testid={testId}>
      <h2>Child Component</h2>
      <button>Click Me</button>
    </div>
  );
};

export default ChildComponent;
