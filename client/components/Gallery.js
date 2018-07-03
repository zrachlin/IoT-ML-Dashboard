import React, { Component } from "react";

class Gallery extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="gallery">
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default Gallery;
