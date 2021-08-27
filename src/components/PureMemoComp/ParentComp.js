import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
  state = { name: "zahra" };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "zahra" });
    }, 1000);
  }
  render() {
    console.log("ParentComp");
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        {/* <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
