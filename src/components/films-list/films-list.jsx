import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Film from "../film/film.jsx";

const handleFilmTitleClick = () => {};

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: {}
    };
  }

  render() {
    const {films} = this.props;

    return <div className="catalog__movies-list">
      {films.map((film, id) => <Film
        key={film.title + id}
        film={film}
        onFilmHover={() => {
          this.setState({
            activeFilm: film
          });
        }}
        onFilmTitleClick={handleFilmTitleClick}/>)}
    </div>;
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }))
};

export default FilmsList;
