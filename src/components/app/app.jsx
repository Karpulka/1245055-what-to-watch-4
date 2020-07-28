import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import FilmDetail from "../film-detail/film-detail.jsx";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";
import FullVideoPlayer from "../full-video-player/full-video-player.jsx";
import {getFilms} from "../../reducer/film/selectors";
import {getPromoFilm, getAllFilms} from "../../reducer/data/selectors";
import {getGenre} from "../../reducer/film/selectors";
import {ActionCreator} from "../../reducer/film/film";

const LIKE_FILMS_COUNT = 4;
const FullVideoPlayerComponent = withVideoPlayer(FullVideoPlayer);

class App extends PureComponent {
  render() {
    const {films, onItemClick, promoFilm, onExitButtonClick, onPlayButtonClick} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {films && promoFilm !== {} ? this._renderFilmPage() : ``}
        </Route>
        <Route exact path="/film-detail">
          {films.length > 0 ? (<FilmDetail {...films[0]}
            likeFilms={this._getLikeFilms(films, films[0].genre, films[0].id)}
            onPlayButtonClick={onPlayButtonClick}
            onFilmClick={onItemClick}/>) : ``}
        </Route>
        <Route exact path="/full-video">
          {Object.keys(promoFilm).length > 0 ? (<FullVideoPlayerComponent
            src={promoFilm.video}
            poster={promoFilm.src}
            title={promoFilm.title}
            isStartPlaying={true}
            onExitButtonClick={onExitButtonClick}
            runtime={promoFilm.runtime} />) : ``}
        </Route>
      </Switch>
    </BrowserRouter>;
  }

  _renderFilmPage() {
    const {films, promoFilm, onItemClick, activeItem: selectedFilm, isShowFilm, onPlayButtonClick, onExitButtonClick} = this.props;
    console.log(films);
    console.log(promoFilm);
    if (isShowFilm) {
      const showingFilm = selectedFilm || promoFilm;
      return <FullVideoPlayerComponent
        src={showingFilm.video}
        poster={showingFilm.src}
        title={showingFilm.title}
        isStartPlaying={true}
        onExitButtonClick={onExitButtonClick}
        runtime={showingFilm.runtime}
      />;
    }

    if (selectedFilm) {
      return <FilmDetail {...selectedFilm}
        likeFilms={this._getLikeFilms(films, selectedFilm.genre, selectedFilm.id)}
        onPlayButtonClick={onPlayButtonClick}
        onFilmClick={onItemClick}/>;
    }

    return <Main
      promoFilmTitle={promoFilm.title}
      promoFilmGenre={promoFilm.genre}
      promoFilmYear={promoFilm.year}
      films={films}
      onPlayButtonClick={onPlayButtonClick}
      onFilmClick={onItemClick}
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
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    src: PropTypes.string,
    runtime: PropTypes.number,
    video: PropTypes.string
  }),
  onItemClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  isShowFilm: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
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
  }),
  genre: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  films: getFilms(state),
  promoFilm: getPromoFilm(state),
  allFilms: getAllFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  setFilms(genre) {
    dispatch(ActionCreator.getFilmByGenre(genre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
