import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const SECONDS_IN_MINUTE = 60000;

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._ref = React.createRef();

      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);

      this._fullTime = props.runtime * SECONDS_IN_MINUTE;

      this.state = {
        progress: 0,
        progressBar: 0,
        isLoading: true,
        isPlaying: props.isPlaying,
        timeLeft: this._fullTime || 0
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
          progress: video.currentTime,
          timeLeft: this.state.timeLeft - video.currentTime,
          progressBar: video.currentTime / (SECONDS_IN_MINUTE * this._fullTime) * 100
        });
      };
    }

    render() {
      return <Component {...this.props}
        onPlayButtonClick={this.handlePlayButtonClick}
        timeLeft={this.state.timeLeft}
        progressBar={this.state.progressBar}
        onFullScreenButtonClick={this.handleFullScreenButtonClick}>
        <video ref={this._ref}/>
      </Component>;
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

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
        if (this.props.wasHover) {
          video.load();
        }
      }
    }

    handlePlayButtonClick() {
      this.setState({isPlaying: !this.state.isPlaying});
    }

    handleFullScreenButtonClick() {
      const video = this._ref.current;
      video.requestFullScreen();
    }
  }

  WithVideoPlayer.defaultProps = {
    isMuted: false
  };

  WithVideoPlayer.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isMuted: PropTypes.bool,
    isPlaying: PropTypes.bool.isRequired
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;
