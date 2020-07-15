import React from "react";
import PropTypes from "prop-types";
import Film from "../film/film.jsx";

const FilmsList = (props) => {
  const {films, onFilmClick, onFilmHover, onFilmBlur, activeFilmID} = props;

  return <div className="catalog__movies-list">
    {films.map((film, id) => <Film
      key={film.title + id}
      film={film}
      onFilmHover={onFilmHover}
      onFilmClick={onFilmClick}
      onFilmBlur={onFilmBlur}
      isPlaying={activeFilmID === film.id}
    />)}
  </div>;
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })),
  onFilmClick: PropTypes.func.isRequired,
  onFilmHover: PropTypes.func.isRequired,
  onFilmBlur: PropTypes.func.isRequired,
  activeFilmID: PropTypes.number,
};

export default FilmsList;
