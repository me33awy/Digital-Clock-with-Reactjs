import React, { Component } from "react";
import "./index.scss";
export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
    setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1000);
  }
  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}
