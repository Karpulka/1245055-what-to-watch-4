import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._ref = React.createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const video = this._ref.current;
    const {src, poster, isMuted} = this.props;
    video.src = src;
    video.poster = poster;
    video.className = `player__video`;
    video.muted = isMuted;

    video.oncanplaythrough = () => {
      this.setState({
        isLoading: false
      });
    };

    video.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };

    video.onpause = () => {
      this.setState({
        isPlaying: false
      });
    };

    video.ontimeupdate = () => {
      this.setState({
        progress: video.currentTime
      });
    };
  }

  render() {
    return <video ref={this._ref}/>;
  }

  componentWillUnmount() {
    const video = this._ref.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
    video.poster = ``;
    video.className = ``;
    video.muted = false;
  }

  componentDidUpdate() {
    const video = this._ref.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.load();
    }
  }
}

VideoPlayer.defaultProps = {
  isMuted: false
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isMuted: PropTypes.bool,
  isPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
