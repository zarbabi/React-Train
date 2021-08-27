import React, { PureComponent } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends PureComponent {
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
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
