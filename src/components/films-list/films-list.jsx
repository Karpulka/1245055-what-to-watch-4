import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Film from "../film/film.jsx";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmID: null
    };

    this.handleFilmHover = this.handleFilmHover.bind(this);
    this.handleFilmBlur = this.handleFilmBlur.bind(this);
    this._timeoutID = null;
  }

  render() {
    const {films, onFilmClick} = this.props;
    const {activeFilmID} = this.state;

    return <div className="catalog__movies-list">
      {films.map((film, id) => <Film
        key={film.title + id}
        film={film}
        onFilmHover={this.handleFilmHover}
        onFilmClick={onFilmClick}
        onFilmBlur={this.handleFilmBlur}
        isPlaying={activeFilmID === film.id}
      />
      )}
    </div>;
  }

  componentWillUnmount() {
    if (this._timeoutID) {
      clearTimeout(this._timeoutID);
    }
  }

  handleFilmHover(film) {
    this._timeoutID = setTimeout(() => this.setState({activeFilmID: film.id}), 1000);
  }

  handleFilmBlur() {
    clearTimeout(this._timeoutID);
    this.setState({activeFilmID: null});
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })),
  onFilmClick: PropTypes.func.isRequired
};

export default FilmsList;
