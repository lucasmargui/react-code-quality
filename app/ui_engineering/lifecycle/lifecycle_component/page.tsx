import React, { Component } from 'react';

interface Props {}

interface State {
  count: number;
  timer: NodeJS.Timeout | null;
}

class LifecycleExample extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      timer: null,
    };
  }

  componentDidMount() {
    // console.log('Component mounted');
    const timer = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
    this.setState({ timer });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.count !== this.state.count) {
      // console.log('Component updated');
    }
  }

  componentWillUnmount() {
    // console.log('Component will unmount');
    const { timer } = this.state;
    if (timer) {
      clearInterval(timer);
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