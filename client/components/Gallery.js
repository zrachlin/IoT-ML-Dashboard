import React, { Component } from "react";

class Galery extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="galery">
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default Galery;
