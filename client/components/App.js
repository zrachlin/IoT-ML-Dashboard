import React, { Component } from "react";
import Gallery from "./Gallery";

class App extends Component {
  render() {
    return (
      <div>
        <Gallery title="Lakes">
          <img src="/images/canoeing.jpg" alt="Canoeing lake" />
          <img src="/images/montains.jpg" alt="Between Montains" />
          <img src="/images/frozen.jpg" alt="Frozen lake" />
        </Gallery>
      </div>
    )
  }
}

export default App;