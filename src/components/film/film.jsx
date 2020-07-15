import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-palyer.jsx";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";

const handleFilmClick = (onFilmClick, film, evt) => {
  evt.preventDefault();
  onFilmClick(film);
};

const Film = (props) => {
  const {film, onFilmHover, onFilmClick, isPlaying, onFilmBlur} = props;
  const VideoPlayerComponent = withVideoPlayer(VideoPlayer);

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onFilmHover(film)} onMouseLeave={() => onFilmBlur()}>
    <div className="small-movie-card__image" onClick={handleFilmClick.bind(null, onFilmClick, film)}>
      <VideoPlayerComponent src={film.video} poster={film.src} width="280" height="175" isMuted={true} isPlaying={isPlaying}/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html" onClick={handleFilmClick.bind(null, onFilmClick, film)}>{film.title}</a>
    </h3>
  </article>;
};

Film.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  }).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  onFilmHover: PropTypes.func.isRequired,
  onFilmBlur: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool
};

export default Film;
