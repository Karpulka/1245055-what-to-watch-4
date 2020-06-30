import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Film from "../film/film.jsx";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onFilmClick, onFilmHover, activeFilmID, onFilmBlur} = this.props;

    return <div className="catalog__movies-list">
      {films.map((film, id) => <Film
        key={film.title + id}
        film={film}
        onFilmHover={onFilmHover}
        onFilmClick={onFilmClick}
        onFilmBlur={onFilmBlur}
        isPlaying={activeFilmID === film.id}
      />
      )}
    </div>;
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })),
  onFilmClick: PropTypes.func.isRequired,
  onFilmHover: PropTypes.func.isRequired,
  onFilmBlur: PropTypes.func.isRequired,
  activeFilmID: PropTypes.number
};

export default FilmsList;
