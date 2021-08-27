import React, { Component } from "react";

class RegComp extends Component {
  render() {
      console.log("Reg Comp");
    return <div>Reg Comp -{this.props.name}</div>;
  }
}

export default RegComp;
