import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import FilmDetail from "../film-detail/film-detail.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import FullVideoPlayer from "../full-video-player/full-video-player.jsx";

const LIKE_FILMS_COUNT = 4;

class App extends PureComponent {
  render() {
    const {films, handleItemClick} = this.props;
    const FullVideoPlayerComponent = withVideoPlayer(FullVideoPlayer);

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderFilmPage()}
        </Route>
        <Route exact path="/film-detail">
          <FilmDetail {...films[0]} likeFilms={this._getLikeFilms(films, films[0].genre, films[0].id)}
            onFilmClick={handleItemClick}/>
        </Route>
        <Route exact path="/full-video">
          <FullVideoPlayerComponent src={films[1].video} poster={films[1].src} title={films[1].title} isPlaying={true} runtime={films[1].runtime} />
        </Route>
      </Switch>
    </BrowserRouter>;
  }

  _renderFilmPage() {
    const {films, promoFilm, handleItemClick, activeItem: selectedFilm} = this.props;

    if (selectedFilm) {
      return <FilmDetail {...selectedFilm} likeFilms={this._getLikeFilms(films, selectedFilm.genre, selectedFilm.id)}
        onFilmClick={handleItemClick}/>;
    }

    return <Main
      promoFilmTitle={promoFilm.title}
      promoFilmGenre={promoFilm.genre}
      promoFilmYear={promoFilm.year}
      films={films}
      onFilmClick={handleItemClick}
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
    runtime: PropTypes.number.isRequired,
    video: PropTypes.string.isRequired
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
    runtime: PropTypes.number.isRequired,
    video: PropTypes.string.isRequired
  })),
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }),
  handleItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.shape({
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
    runtime: PropTypes.number.isRequired,
    video: PropTypes.string.isRequired
  })
};

const mapStoreToProps = (state) => ({
  films: state.films,
  promoFilm: state.promoFilm,
  allFilms: state.allFilms
});

export {App};
export default connect(mapStoreToProps)(App);
