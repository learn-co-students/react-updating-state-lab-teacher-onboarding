import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  render() {
    const setBitRate = () => {
      const settings = { ...this.state.settings };
      settings.bitrate = 12;
      this.setState({ settings });
    };

    const setResolution = () => {
      const settings = { ...this.state.settings };
      settings.video.resolution = "720p";
      this.setState({ settings });
    };

    return (
      <div>
        <button className="bitrate" onClick={setBitRate}>
          bitrate
        </button>
        <button className="resolution" onClick={setResolution}>
          resolution
        </button>
      </div>
    );
  }
}
