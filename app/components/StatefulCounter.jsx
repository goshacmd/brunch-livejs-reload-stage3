import React from 'react';

export default React.createClass({
  getInitialState() {
    return { count: 0 };
  },

  decrement() {
    this.setState({ count: this.state.count - 1 });
  },

  increment() {
    this.setState({ count: this.state.count + 1 });
  },

  render() {
    const {count} = this.state;
    return <div>
      <h2>Stateful counter (v2)</h2>
      <p>
        <button onClick={this.decrement}>-</button>
        {count}
        <button onClick={this.increment}>+</button>
      </p>
    </div>;
  }
});
