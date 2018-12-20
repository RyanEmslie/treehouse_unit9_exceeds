import React, { Component } from "react";


//this component is rendered when any non-nav link url is entered
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
