
import React from 'react';

interface ChildComponentProps {
  onButtonClick: () => void;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ onButtonClick }) => {
  const handleClick = () => {
    onButtonClick(); // Emitting the event
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default ChildComponent;
