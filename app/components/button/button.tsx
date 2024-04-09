// ButtonComponent.js
import React from 'react';

interface ButtonProps {
  onClick: () => void; // Define the type of onClick prop
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button  data-testid="button" onClick={onClick}>
      Click me
    </button>
  );
};

export default ButtonComponent;
