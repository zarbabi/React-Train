import React, { Component } from "react";

class CounterClass extends Component {
  state = { count: 0 };

  twoClickClss = () => {
    this.setState((prevCount) => {
      return { count: prevCount.count + 2 };
      //console.log(prevCount);
    });
  };
  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={this.twoClickClss}>two class </button>
      </div>
    );
  }
}

export default CounterClass;
