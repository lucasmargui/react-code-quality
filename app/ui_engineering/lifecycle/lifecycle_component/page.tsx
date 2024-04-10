"use client"

import React, { Component } from 'react';

interface Props {}

interface State {
  count: number;
}

class LifecycleExample extends Component<Props, State> {
  private timer: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Component mounted');
    // Simulate fetching data or subscribing to events
    this.timer = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.count !== this.state.count) {
      console.log('Component updated');
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // Clean up tasks like clearing intervals or cancelling subscriptions
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment Count
        </button>
      </div>
    );
  }
}

export default LifecycleExample;
