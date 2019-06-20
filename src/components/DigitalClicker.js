// Code DigitalClicker Component Here

import React, { Component } from 'React';

export default class DigitalClicker extends Component {
  constructor(props){
    super(props)
    this.state = {
      timesClicked: 0
    }
  }
  incrementClicks = () => {
    this.setState(state => {
      state.timesClicked += 1
      return state
    })
  }
  render(){
    return <button onClick={this.incrementClicks}>
      {this.state.timesClicked}
    </button>
  }
}
