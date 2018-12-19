import React, { Component } from "react";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <img alt="not found" src={require("../images/404.png")} />
      </div>
    )
  }
}

export default NoMatch;
