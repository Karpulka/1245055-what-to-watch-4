import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Film from "../film/film.jsx";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onFilmClick, onFilmHover} = this.props;

    return <div className="catalog__movies-list">
      {films.map((film, id) => <Film
        key={film.title + id}
        film={film}
        onFilmHover={() => {
          onFilmHover(film);
        }}
        onFilmClick={onFilmClick}/>)}
    </div>;
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })),
  onFilmClick: PropTypes.func.isRequired,
  onFilmHover: PropTypes.func.isRequired
};

export default FilmsList;
