import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Comp");
    return <div>pure comp - {this.props.name}</div>;
  }
}

export default PureComp;
