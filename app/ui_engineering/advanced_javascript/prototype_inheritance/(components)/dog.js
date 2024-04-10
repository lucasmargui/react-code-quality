
"use client"
// Dog.js
import React from 'react';
import Animal from './animal';

class Dog extends Animal {
  constructor(props) {
    super(props);
    this.breed = props.breed;
  }

  bark() {
    return <p>Woof! Woof!</p>;
  }

  render() {
    return (
      <div>
        {super.render()}
        {this.bark()}
      </div>
    );
  }
}

export default Dog;
