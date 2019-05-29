// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component{
  constructor(props){
    super(props)
    this.state = {
      errors: [],

      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      },
      user: null
    }
  }
  updateBitrate(){
    const resolution = this.state.settings.video.resolution
    this.setState({
      settings: {
        bitrate: 12,
        video: {
          resolution: resolution
        }
      }
    })

  }

  updateResolution(){
    const bitrate = this.state.settings.bitrate
    this.setState({
      settings: {
        bitrate: bitrate,
        video:{
          resolution: "720p"
        }
      }
    })
  }
  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.updateBitrate.bind(this)}>Bitrate</button>
        <button className="resolution" onClick={this.updateResolution.bind(this)}>Resolution</button>
      </div>
    )
  }
}
