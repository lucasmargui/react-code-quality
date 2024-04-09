import React, { MouseEventHandler } from 'react';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  additionalText?: string; // Change to lowercase 'string'
}

const YourComponent: React.FC<Props> = ({ onClick, additionalText }) => { // Include props in the argument list
  return (
    <div>
      {additionalText && <p>{additionalText}</p>} {/* Render additionalText if provided */}
      <button onClick={onClick} data-testid="your-button">Click Me</button>
    </div>
  );
};

export default YourComponent;
