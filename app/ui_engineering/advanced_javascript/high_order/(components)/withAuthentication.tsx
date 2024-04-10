// withAuthentication.tsx

import React, { Component, ComponentType } from 'react';

export interface WithAuthenticationProps {
  isAuthenticated: boolean;
}

const withAuthentication = <P extends object>(
  WrappedComponent: ComponentType<P & WithAuthenticationProps>
) => {
  class WithAuthentication extends Component<P & WithAuthenticationProps> {
    constructor(props: P & WithAuthenticationProps) {
      super(props);
      this.state = {
        isAuthenticated: false,
      };
    }

    componentDidMount() {
      // Simulate authentication logic, for example, fetching from localStorage
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      this.setState({ isAuthenticated });
    }

    render() {
      // Cast props to the intersection of original props and authentication props
      const { isAuthenticated, ...rest } = this.props;
      return <WrappedComponent isAuthenticated={isAuthenticated} {...rest as P} />;
    }
  }

  return WithAuthentication;
};

export default withAuthentication;
