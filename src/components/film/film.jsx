import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-palyer.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import {Link} from "react-router-dom";

const Film = (props) => {
  const {film, onFilmHover, isStartPlaying, onFilmBlur, onFilmClick} = props;
  const {id, title, video, preview} = film;
  const VideoPlayerComponent = withVideoPlayer(VideoPlayer);

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onFilmHover(film)} onMouseLeave={() => onFilmBlur()}>
    <div className="small-movie-card__image" onClick={() => onFilmClick(id)}>
      <VideoPlayerComponent src={video} poster={preview} width="280" height="175" isMuted={true} isStartPlaying={isStartPlaying} wasHover={!isStartPlaying}/>
    </div>
    <h3 className="small-movie-card__title">
      <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
    </h3>
  </article>;
};

Film.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  }).isRequired,
  onFilmHover: PropTypes.func.isRequired,
  onFilmBlur: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired,
  isStartPlaying: PropTypes.bool
};

export default Film;
