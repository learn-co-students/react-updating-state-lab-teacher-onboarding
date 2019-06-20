// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor(props){
    super(props)

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  setBitrate = (bitrate = 12) => {
    this.setState(state => {
      state.settings.bitrate = bitrate
      return state
    })
  }
  setResolution = (resolution = '720p') => {
    this.setState(state => {
      state.settings.video.resolution = resolution
      return state
    })
  }
  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.setBitrate}></button>
        <button className="resolution" onClick={this.setResolution}></button>
      </div>
    )
  }
}
