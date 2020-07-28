import React from "react";
import PropTypes from "prop-types";
import Film from "../film/film.jsx";
import {connect} from "react-redux";

const FilmsList = (props) => {
  const {films, onFilmClick, onFilmHover, onFilmBlur, activeFilmID, showingFilms} = props;

  return <div className="catalog__movies-list">
    {films.slice(0, showingFilms).map((film, id) => <Film
      key={film.title + id}
      film={film}
      onFilmHover={onFilmHover}
      onFilmClick={onFilmClick}
      onFilmBlur={onFilmBlur}
      isStartPlaying={activeFilmID === film.id}
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
  showingFilms: PropTypes.number.isRequired,
};

const mapPropsToState = (state) => ({
  showingFilms: state.showingFilms
});

export {FilmsList};
export default connect(mapPropsToState)(FilmsList);
