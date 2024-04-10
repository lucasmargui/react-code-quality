

import React, { ComponentType, Component, ComponentClass } from 'react';

const withParent = <P extends object>(WrappedComponent: ComponentType<P>): ComponentClass<P> => {
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

export default withParent;
