

import React, { ComponentType, Component, ComponentClass } from 'react';

const withComponent = <P extends object>(WrappedComponent: ComponentType<P>): ComponentClass<P> => {
  return class extends Component<P> {
    render() {
      return (
        <div>
          <WrappedComponent {...this.props as P} />
        </div>
      );
    }
  };
};

export default withComponent;


// const withParent = ...: This declares a constant named withParent, which is a function.

// <P extends object>(WrappedComponent: ComponentType<P>): ComponentClass<P>: This function is a generic function. It takes a type parameter P which extends object. It expects a component (WrappedComponent) of type ComponentType<P>, and it returns a component class (ComponentClass<P>).

// return class extends Component<P> { ... }: This returns an anonymous class that extends Component<P>, where P is the type parameter provided to the function. So, this returned class is a React component class.

// render() { ... }: This defines the render method of the component class. Inside the render method, it returns JSX, which renders a div element wrapping the WrappedComponent.

// <WrappedComponent {...this.props as P} />: This line renders the WrappedComponent by spreading all the props (this.props) onto it, and it explicitly asserts the type of these props as P.
