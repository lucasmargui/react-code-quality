// Animal.js
import React from 'react';

class Animal extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  introduce() {
    return <p>Hello, I'm {this.name}</p>;
  }

  render() {
    return this.introduce();
  }
}

export default Animal;
