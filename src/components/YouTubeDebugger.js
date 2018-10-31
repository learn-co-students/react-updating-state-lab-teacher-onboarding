import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor(props) {
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

  changeBitrate = (btr) => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: btr
      }
    })
  }

  componentDidUpdate = () => console.log(this.state.settings.bitrate
      , this.state.settings.video.resolution)

  changeResolution = (res) =>
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: res
        }
      }
    })

  render() {
    return(
      <div>
      <button className="bitrate" onClick={() => this.changeBitrate(12)}>Change Bitrate</button>
      <button className="resolution" onClick={() => this.changeResolution('720p')}>Change Resolution</button>
      </div>
      )
  }
}
