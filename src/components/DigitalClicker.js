import React, { Component } from "react";

export default class DigitalClicker extends Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  render() {
    const updateCount = () => {
      this.setState({ timesClicked: this.state.timesClicked + 1 });
    };

    return <button onClick={updateCount}>{this.state.timesClicked}</button>;
  }
}
