import React, { ComponentType, Component } from 'react';

// This function is a higher-order component that takes a component as input
// and returns a new component that logs when the wrapped component mounts.

//const withLogger = <P extends object>(WrappedComponent: ComponentType<P>): ComponentType<P> {}
// <P extends object> indicates that P is a generic type parameter that extends from object.
// funcParam: P represents the parameter of the function with type P.
// ReturnType<P> specifies the return type of the function as derived from the type P.
const withLogger = <P extends object>(WrappedComponent: ComponentType<P>): ComponentType<P> => {
  // This is an anonymous class component that extends React.Component.
  // It adds componentDidMount lifecycle method to log when the component mounts.

// <P extends object>: This indicates that P is a generic type parameter that extends object, implying that P must be an object or any type that can be assigned to an object.

// (WrappedComponent: ComponentType<P>): This parameter indicates that the WrappedComponent argument should be of type ComponentType<P>, which is a type alias representing a React component that accepts props of type P.

// : ComponentType<P>: This specifies the return type of the withLogger function. It indicates that the returned component will also accept props of type P.

  
  return class extends Component<P> {
    componentDidMount() {
      // Log a message indicating the mounted component's display name or name.
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} mounted`);
    }

    // Render method returns the wrapped component with all props passed down.
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Export the withLogger HOC.
export default withLogger;
