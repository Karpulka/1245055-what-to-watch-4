import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import FilmDetail from "../film-detail/film-detail.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

const LIKE_FILMS_COUNT = 4;

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilm: null
    };

    this.handleFilmClick = this.handleFilmClick.bind(this);
  }

  render() {
    const {films} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderFilmPage()}
        </Route>
        <Route exact path="/film-detail">
          <FilmDetail {...films[0]} likeFilms={this._getLikeFilms(films, films[0].genre, films[0].id)} onFilmClick={this.handleFilmClick}/>
        </Route>
      </Switch>
    </BrowserRouter>;
  }

  handleFilmClick(film) {
    this.setState({selectedFilm: film});
  }

  _renderFilmPage() {
    const {films, promoFilm} = this.props;
    const {selectedFilm} = this.state;

    if (selectedFilm) {
      return <FilmDetail {...selectedFilm} likeFilms={this._getLikeFilms(films, selectedFilm.genre, selectedFilm.id)} onFilmClick={this.handleFilmClick}/>;
    }

    return <Main
      promoFilmTitle={promoFilm.title}
      promoFilmGenre={promoFilm.genre}
      promoFilmYear={promoFilm.year}
      films={films}
      onFilmClick={this.handleFilmClick}
    />;
  }

  _getLikeFilms(films, genre, filmID) {
    const {allFilms} = this.props;
    const genres = genre.split(`, `);

    const sortedFilms = allFilms.filter((film) => {
      const currentGenres = film.genre.split(`, `);

      let isCoincidence = false;
      genres.forEach((likeGenre) => {
        if (currentGenres.indexOf(likeGenre) > -1 && film.id !== filmID) {
          isCoincidence = true;
        }
      });

      return isCoincidence;
    });

    return sortedFilms.slice(0, LIKE_FILMS_COUNT);
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    voiceCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired
  })),
  allFilms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    voiceCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actorList: PropTypes.arrayOf(PropTypes.string).isRequired,
    runtime: PropTypes.number.isRequired
  })),
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  })
};

const mapStoreToProps = (state) => ({
  films: state.films,
  promoFilm: state.promoFilm,
  allFilms: state.allFilms
});

export {App};
export default connect(mapStoreToProps)(App);
