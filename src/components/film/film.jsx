import React from "react";
import PropTypes from "prop-types";

const Film = (props) => {
  const {film, onFilmHover, onFilmClick} = props;

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onFilmHover(film)}>
    <div className="small-movie-card__image" onClick={onFilmClick}>
      <img src={film.src} alt={film.title} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html" onClick={onFilmClick}>{film.title}</a>
    </h3>
  </article>;
};

Film.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  onFilmHover: PropTypes.func.isRequired
};

export default Film;
