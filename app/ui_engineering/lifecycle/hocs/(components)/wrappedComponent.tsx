
import React from 'react';

// Define the interface for props
interface MyComponentProps {
  name: string; // example prop
  age: number; // example prop
}

// Define the component with props
const MyComponent: React.FC<MyComponentProps> = (props) => {
  // Destructure props
  const { name, age } = props;

  return (
    <div>
      <p>Hello from MyComponent</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default MyComponent;
