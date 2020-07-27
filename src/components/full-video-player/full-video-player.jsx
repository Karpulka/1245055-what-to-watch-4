import React from "react";
import PropTypes from "prop-types";
import {formatTimeLeft} from "../../utils";

const FullVideoPlayer = (props) => {
  const {children, onPlayButtonClick, isPlaying, title, timeLeft, progressBar, onFullScreenButtonClick, onExitButtonClick} = props;
  return <div className="player">
    {React.cloneElement(children, {className: `player__video`})}

    <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={progressBar} max="100"></progress>
          <div className="player__toggler" style={{left: progressBar + `%`}}>Toggler</div>
        </div>
        <div className="player__time-value">{formatTimeLeft(timeLeft)}</div>
      </div>

      <div className="player__controls-row">
        <button type="button" className="player__play" onClick={onPlayButtonClick}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>{isPlaying ? `Pause` : `Play`}</span>
        </button>
        <div className="player__name">{title}</div>

        <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>;
};

export default FullVideoPlayer;
