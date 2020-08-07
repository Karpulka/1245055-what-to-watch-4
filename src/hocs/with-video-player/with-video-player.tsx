import * as React from "react";
import {Subtract} from "utility-types";

const SECONDS_IN_MINUTE = 60;

interface Props {
  src: string;
  poster: string;
  isMuted?: boolean;
  isStartPlaying: boolean;
  runtime?: number;
  wasHover?: boolean;
}

interface State {
  progress: number;
  progressBar: number;
  isLoading: boolean;
  isPlaying: boolean;
  timeLeft: number;
}

interface InjectingProps {
  onPlayButtonClick: () => void;
  isPlaying: boolean;
  timeLeft: number;
  progressBar: number;
  onFullScreenButtonClick: () => void;
}

const withVideoPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithVideoPlayer extends React.PureComponent<Props & T, State> {
    static defaultProps = {
      isMuted: false
    };

    public videoRef: React.RefObject<HTMLVideoElement>;

    private _fullTime: number;

    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);

      this._fullTime = props.runtime * SECONDS_IN_MINUTE;

      this.state = {
        progress: 0,
        progressBar: 0,
        isLoading: true,
        isPlaying: props.isStartPlaying,
        timeLeft: this._fullTime || 0
      };
    }

    componentDidMount() {
      const video = this.videoRef.current;
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
          timeLeft: video.duration - video.currentTime,
          progressBar: video.currentTime / video.duration * 100
        });
      };
    }

    render() {
      return <Component {...this.props}
        onPlayButtonClick={this.handlePlayButtonClick}
        isPlaying={this.state.isPlaying}
        timeLeft={this.state.timeLeft}
        progressBar={this.state.progressBar}
        onFullScreenButtonClick={this.handleFullScreenButtonClick}>
        <video ref={this.videoRef}/>
      </Component>;
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

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
      const video = this.videoRef.current;

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
      const video = this.videoRef.current;
      const rfs = video.requestFullscreen;
      rfs.call(video);
    }
  }

  return WithVideoPlayer;
};

export default withVideoPlayer;
